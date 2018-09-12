import { Clip } from '../../Entity'
import { TypeDescriptor } from '../../PluginSupport/ParamTypeDescriptor'
import { RealParameterValueTypes } from '../Engine'
import * as ExpressionContext from '../ExpressionSupport/ExpressionContext'
import * as RendererFactory from '../Renderer'
import { IRenderer } from '../Renderer/RendererBase'
import RenderRequest from '../RenderRequest'
import EffectRenderTask from './EffectRenderTask'
export default class ClipRenderTask {
    public static build({ clip, clipRendererCache, req }: {
        clip: Clip;
        clipRendererCache: WeakMap<Clip, IRenderer<any>>;
        req: RenderRequest;
    }): ClipRenderTask
    public clipRenderer: IRenderer<any>
    public rendererParams: TypeDescriptor
    public rendererType: RendererFactory.AvailableRenderer
    public clipPlacedFrame: number
    public clipDurationFrames: number
    public keyframeLUT: {
        [paramName: string]: {
            [frame: number]: RealParameterValueTypes;
        };
    }
    public expressions: {
        [paramName: string]: (context: ExpressionContext.ContextSource) => any;
    }
    public effectRenderTask: EffectRenderTask[]
    private initialKeyframeValues
    public initialize(req: RenderRequest): Promise<void>
}
