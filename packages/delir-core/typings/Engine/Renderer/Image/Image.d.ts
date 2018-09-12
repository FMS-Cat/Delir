import { Asset } from '../../../Entity'
import PreRenderingRequest from '../../PreRenderingRequest'
import RenderingRequest from '../../RenderRequest'
import { IRenderer } from '../RendererBase'
interface ImageRendererParams {
    source: Asset
    x: number
    y: number
    scale: number
    rotate: number
    opacity: number
}
export default class ImageLayer implements IRenderer<ImageRendererParams> {
    public static readonly rendererId: string
    public static provideAssetAssignMap(): {
        jpeg: string;
        jpg: string;
        png: string;
        gif: string;
        svg: string;
    }
    public static provideParameters(): import ('PluginSupport/ParamTypeDescriptor').TypeDescriptor
    private _image
    public beforeRender(req: PreRenderingRequest<ImageRendererParams>): Promise<void>
    public render(req: RenderingRequest<ImageRendererParams>): Promise<void>
}
export {}
