import { Composition } from '../Entity'
import DependencyResolver from './DependencyResolver'
import { RealParameterValueTypes } from './Engine'
import PreRenderingRequest from './PreRenderingRequest'
export default class RenderRequest<T = {
    [propName: string]: RealParameterValueTypes;
}> {
    private static _permitKeys
    private static _permitOnlyInitializeKey
    public readonly time: number
    public readonly timeOnComposition: number
    public readonly timeOnClip: number
    public readonly frame: number
    public readonly frameOnComposition: number
    public readonly frameOnClip: number
    public readonly srcCanvas: HTMLCanvasElement | null
    public readonly destCanvas: HTMLCanvasElement
    public readonly width: number
    public readonly height: number
    public readonly framerate: number
    public readonly durationFrames: number
    public readonly destAudioBuffer: Float32Array[]
    public readonly audioContext: AudioContext | OfflineAudioContext
    public readonly samplingRate: number
    public readonly neededSamples: number
    public readonly audioChannels: number
    public readonly isAudioBufferingNeeded: boolean
    public readonly rootComposition: Readonly<Composition>
    public readonly parentComposition: Readonly<Composition>
    public readonly parameters: T
    public readonly resolver: DependencyResolver
    public readonly seconds: number
    constructor(properties?: Partial<RenderRequest<T>>);
    public clone(patch: Partial<RenderRequest<T>>): RenderRequest<T>
    public toPreRenderingRequest(): PreRenderingRequest<T>
}
