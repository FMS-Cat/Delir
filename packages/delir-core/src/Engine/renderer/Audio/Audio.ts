import * as fs from 'fs'
import * as _ from 'lodash'

import { resampling } from '../../../helper/Audio'
import Type from '../../../PluginSupport/type-descriptor'
import { TypeDescriptor } from '../../../PluginSupport/type-descriptor'
import PreRenderContext from '../../PreRenderContext'
import RenderContext from '../../RenderContext'
import { IRenderer } from '../RendererBase'

import { Asset } from '../../../Entity'

interface AVFormat {
    bitrate: number
    channelsPerFrame: number
    floatingPoint: boolean
    formatID: string,
    sampleRate: number
}

interface AudioRendererParam {
    source: Asset
    volume: number
    startTime: number
}

export default class AudioRenderer implements IRenderer<AudioRendererParam>
{
    public static get rendererId(): string { return 'audio' }

    public static provideAssetAssignMap()
    {
        return {
            wav: 'source',
            webm: 'source',
            mpeg: 'source',
            mp3: 'source',
            ogg: 'source'
        }
    }

    public static provideParameters(): TypeDescriptor
    {
        return Type
            .asset('source', {
                label: 'Audio file',
                extensions: ['wav', 'webm', 'mpeg', 'mp3', 'ogg'],
            })
            .float('volume', {
                label: 'Volume',
                defaultValue: 100,
                animatable: true,
            })
            .float('startTime', {
                label: 'Start time(sec)',
                animatable: false,
                defaultValue: 0,
            })
    }

    private _audio: {
        sourcePath: string
        numberOfChannels: number
        buffers: Float32Array[]
    }

    public async beforeRender(context: PreRenderContext<AudioRendererParam>)
    {
        const params = context.parameters

        if (this._audio && this._audio.sourcePath === params.source.path) {
            return
        }

        // `AudioContext` cause depletion, use OfflineAudioContext
        const context = new OfflineAudioContext(1, context.audioChannels, context.samplingRate)
        const content = fs.readFileSync(params.source.path)
        const audioBuffer = await context.decodeAudioData(content.buffer as ArrayBuffer)
        const buffers = _.times(audioBuffer.numberOfChannels, ch => audioBuffer.getChannelData(ch))

        await resampling(audioBuffer.sampleRate, context.samplingRate, buffers)

        this._audio = {
            sourcePath: params.source.path,
            numberOfChannels: audioBuffer.numberOfChannels,
            buffers,
        }
    }

    public async render(context: RenderContext<AudioRendererParam>)
    {
        return this.renderAudio(context)
    }

    public async renderAudio(context: RenderContext<AudioRendererParam>)
    {
        if (!context.isAudioBufferingNeeded) return

        const volume = _.clamp(context.parameters.volume / 100, 0, 1)

        const source = this._audio
        const destBuffers = context.destAudioBuffer

        // Slice from source
        const begin = ((context.parameters.startTime * context.samplingRate) + (context.timeOnClip * context.samplingRate)) | 0
        const end = begin + context.neededSamples

        const slices: Float32Array[] = new Array(context.audioChannels)

        for (let ch = 0, l = source.numberOfChannels; ch < l; ch++) {
            const buffer = source.buffers[ch]
            slices[ch] = buffer.slice(begin, end)
        }

        // Resampling & gaining
        const context = new OfflineAudioContext(context.audioChannels, context.neededSamples, context.samplingRate)

        const inputBuffer = context.createBuffer(source.numberOfChannels, context.neededSamples, context.samplingRate)
        _.times(source.numberOfChannels, ch => inputBuffer.copyToChannel(slices[ch], ch))

        const gain = context.createGain()
        gain.gain.value = volume
        gain.connect(context.destination)

        const bufferSource = context.createBufferSource()
        bufferSource.buffer = inputBuffer
        bufferSource.connect(gain)
        bufferSource.start(0)

        const result = await context.startRendering()
        _.times(context.audioChannels, ch => destBuffers[ch].set(result.getChannelData(ch)))
    }
}
