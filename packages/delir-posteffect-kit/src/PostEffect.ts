import { PreRenderRequest, RenderRequest, TypeDescriptor } from '@ragg/delir-core'

export default abstract class EffectPluginBase
{
    public static provideParameters(): TypeDescriptor
    {
        // None
        // return new TypeDescriptor()
    }

    public abstract async initialize(req: PreRenderRequest<any>): Promise<void>

    public abstract async render(req: RenderRequest<any>): Promise<void>
}
