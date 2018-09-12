import PreRenderRequest from '../Engine/PreRenderingRequest'
import RenderRequest from '../Engine/RenderRequest'
import { TypeDescriptor } from './ParamTypeDescriptor'
import PluginBase from './plugin-base'
export interface EffectPluginClass {
    new (): EffectPluginBase
    provideParameters(): TypeDescriptor
}
export default abstract class EffectPluginBase extends PluginBase {
    public static provideParameters(): TypeDescriptor
    public abstract initialize(req: PreRenderRequest<any>): Promise<void>
    public abstract render(req: RenderRequest<any>): Promise<void>
}
