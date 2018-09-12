import PreRenderRequest from '../Engine/PreRenderingRequest'
import RenderRequest from '../Engine/RenderRequest'

import { ParameterValueTypes, TypeDescriptor } from './ParamTypeDescriptor'
import PluginBase from './plugin-base'

export interface EffectPluginClass {
    new (): EffectPluginBase
    provideParameters(): TypeDescriptor
}

export default abstract class EffectPluginBase extends PluginBase
{
    public static provideParameters(): TypeDescriptor
    {
        // None
        return new TypeDescriptor()
    }

    public abstract async initialize(req: PreRenderRequest<any>): Promise<void>

    public abstract async render(req: RenderRequest<any>): Promise<void>
}
