import { TypeDescriptor } from '../../../PluginSupport/ParamTypeDescriptor'
import PreRenderingRequest from '../../PreRenderingRequest'
import RenderingRequest from '../../RenderRequest'
import { IRenderer } from '../RendererBase'
interface Param {
    opacity: number
}
export default class AdjustmentRenderer implements IRenderer<Param> {
    public static readonly rendererId: string
    public static provideAssetAssignMap(): {}
    public static provideParameters(): TypeDescriptor
    public beforeRender(req: PreRenderingRequest<Param>): Promise<void>
    public render(req: RenderingRequest<Param>): Promise<void>
}
export {}
