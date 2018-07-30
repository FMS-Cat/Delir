import * as _ from 'lodash'

import * as KeyframeHelper from '../../../helper/keyframe-helper'
import EffectPluginBase from '../../../plugin-support/PostEffectBase'
import { ParameterValueTypes, TypeDescriptor } from '../../../plugin-support/type-descriptor'
import { Clip, Effect } from '../../../project'
import { KeyframeValueTypes } from '../../../project/keyframe'
import { AssetPointerScheme } from '../../../project/scheme/keyframe'
import { Expression } from '../../../values'
import DependencyResolver from '../DependencyResolver'
import { compileTypeScript } from '../ExpressionCompiler'
import * as ExpressionContext from '../ExpressionContext'
import ExpressionVM from '../ExpressionVM'
import { ExpressionExecuters } from '../pipeline'
import RenderRequest from '../render-request'

export default class EffectRenderTask {
    public static build({effect, clip, req, resolver, effectCache}: {
        effect: Effect,
        clip: Clip,
        effectCache: WeakMap<Effect, EffectPluginBase>,
        req: RenderRequest,
        resolver: DependencyResolver,
    }): EffectRenderTask {
        const EffectPluginClass = resolver.resolveEffectPlugin(effect.processor)

        const effectParams = EffectPluginClass.provideParameters()
        const effectAssetParamNames = effectParams.properties.filter(prop => prop.type === 'ASSET').map(prop => prop.propName)

        let effectRenderer = effectCache.get(effect)

        if (!effectRenderer) {
            effectRenderer = new EffectPluginClass()
            effectCache.set(effect, effectRenderer)
        }

        const initialKeyframeValues = KeyframeHelper.calcKeyframeValuesAt(0, clip.placedFrame, effectParams, effect.keyframes)
        effectAssetParamNames.forEach(propName => {
            initialKeyframeValues[propName] = initialKeyframeValues[propName]
                ? resolver.resolveAsset((initialKeyframeValues[propName] as AssetPointerScheme).assetId)
                : null
        })

        const effectKeyframeLUT = KeyframeHelper.calcKeyFrames(effectParams, effect.keyframes, clip.placedFrame, 0, req.durationFrames)
        effectAssetParamNames.forEach(propName => {
            effectKeyframeLUT[propName] = _.map(effectKeyframeLUT[propName], value => {
                return value ? resolver.resolveAsset((value as AssetPointerScheme).assetId) : null
            })
        })

        const effectExpressions = _(effect.expressions).mapValues((expr: Expression) => {
            const code = compileTypeScript(expr.code)
            return (exposes: ExpressionContext.Exposes) => {
                return ExpressionVM.execute(code, ExpressionContext.makeContext(exposes), { filename: `${clip.id}.effect.expression.ts` })
            }
        }).pickBy(value => value !== null).value()

        const task = new EffectRenderTask()
        task.effectEntityId = effect.id
        task.effectRenderer = effectRenderer
        task.effectorProps = effectParams
        task.keyframeLUT = effectKeyframeLUT
        task.initialKeyframeValues = initialKeyframeValues
        // TODO: Fix typing
        task.expressions = effectExpressions as any

        return task
    }

    public effectEntityId: string
    public effectRenderer: EffectPluginBase
    public effectorProps: TypeDescriptor
    public keyframeLUT: { [paramName: string]: KeyframeHelper.KeyframeParamValueSequence }
    public expressions: { [paramName: string]: (exposes: ExpressionContext.Exposes) => KeyframeValueTypes }
    private initialKeyframeValues: { [paramName: string]: KeyframeValueTypes }

    public async initialize(req: RenderRequest) {
        const preRenderReq = req.clone({parameters: this.initialKeyframeValues}).toPreRenderingRequest()
        await this.effectRenderer.initialize(preRenderReq)
    }
}
