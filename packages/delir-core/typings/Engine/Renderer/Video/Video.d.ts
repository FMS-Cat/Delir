import { Asset } from '../../../Entity'
import { TypeDescriptor } from '../../../PluginSupport/ParamTypeDescriptor'
import PreRenderingRequest from '../../PreRenderingRequest'
import RenderingRequest from '../../RenderRequest'
import { IRenderer } from '../RendererBase'
interface VideoRendererParam {
    source: Asset
    loop: boolean
    offsetTime: number
    x: number
    y: number
    scale: number
    rotate: number
    opacity: number
}
export default class VideoLayer implements IRenderer<VideoRendererParam> {
    public static readonly rendererId: string
    public static provideAssetAssignMap(): {
        mp4: string;
    }
    public static provideParameters(): TypeDescriptor
    private _video
    public beforeRender(req: PreRenderingRequest<VideoRendererParam>): Promise<void>
    public render(req: RenderingRequest<VideoRendererParam>): Promise<void>
}
export {}
