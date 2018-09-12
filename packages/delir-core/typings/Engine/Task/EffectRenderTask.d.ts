import { Clip, Effect } from '../../Entity'
import { TypeDescriptor } from '../../PluginSupport/ParamTypeDescriptor'
import EffectPluginBase from '../../PluginSupport/PostEffectBase'
import DependencyResolver from '../DependencyResolver'
import { RealParameterValueTypes } from '../Engine'
import * as ExpressionContext from '../ExpressionSupport/ExpressionContext'
import RenderRequest from '../RenderRequest'
export default class EffectRenderTask {
    public static build({ effect, clip, req, resolver, effectCache }: {
        effect: Effect;
        clip: Clip;
        effectCache: WeakMap<Effect, EffectPluginBase>;
        req: RenderRequest;
        resolver: DependencyResolver;
    }): EffectRenderTask
    public effectEntityId: string
    public effectRenderer: EffectPluginBase
    public effectorProps: TypeDescriptor
    public keyframeLUT: {
        [paramName: string]: {
            [frame: number]: RealParameterValueTypes;
        };
    }
    public expressions: {
        [paramName: string]: (exposes: ExpressionContext.ContextSource) => RealParameterValueTypes;
    }
    private initialKeyframeValues
    public initialize(req: RenderRequest): Promise<void>
}
