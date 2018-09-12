import { TypeDescriptor } from '../../../PluginSupport/ParamTypeDescriptor'
import ColorRGBA from '../../../Values/ColorRGBA'
import PreRenderingRequest from '../../PreRenderingRequest'
import RenderingRequest from '../../RenderRequest'
import { IRenderer } from '../RendererBase'
interface TextRendererParam {
    text: string
    family: string
    weight: string
    size: number
    lineHeight: number
    color: ColorRGBA
    x: number
    y: number
    rotate: number
    opacity: number
}
export default class TextLayer implements IRenderer<TextRendererParam> {
    public static readonly rendererId: string
    public static provideParameters: () => TypeDescriptor
    public static provideAssetAssignMap(): {}
    private _bufferCanvas
    public beforeRender(req: PreRenderingRequest<TextRendererParam>): Promise<void>
    public render(req: RenderingRequest<TextRendererParam>): Promise<void>
}
export {}
