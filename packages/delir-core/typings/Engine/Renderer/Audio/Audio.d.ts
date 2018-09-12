import 'aac'
import 'alac/src/decoder'
import 'flac'
import 'mp3'
import { Asset } from '../../../Entity'
import { TypeDescriptor } from '../../../PluginSupport/ParamTypeDescriptor'
import PreRenderingRequest from '../../PreRenderingRequest'
import RenderingRequest from '../../RenderRequest'
import { IRenderer } from '../RendererBase'
interface AudioRendererParam {
    source: Asset
    volume: number
    startTime: number
}
export default class AudioRenderer implements IRenderer<AudioRendererParam> {
    public static readonly rendererId: string
    public static provideAssetAssignMap(): {
        wav: string;
        webm: string;
        mpeg: string;
        mp3: string;
        ogg: string;
    }
    public static provideParameters(): TypeDescriptor
    private _audio
    public beforeRender(req: PreRenderingRequest<AudioRendererParam>): Promise<void>
    public render(req: RenderingRequest<AudioRendererParam>): Promise<void>
    public renderAudio(req: RenderingRequest<AudioRendererParam>): Promise<void>
}
export {}
