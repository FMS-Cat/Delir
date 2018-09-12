import { Composition } from '../Entity'
import { ParameterValueTypes } from '../PluginSupport/ParamTypeDescriptor'
import DependencyResolver from './DependencyResolver'
export default class PreRenderingRequest<T = {
    [propName: string]: ParameterValueTypes;
}> {
    private static _permitKeys
    private static _permitOnlyInitializeKey
    public width: number
    public height: number
    public framerate: number
    public durationFrames: number
    public samplingRate: number
    public audioBufferSize: number
    public audioChannels: number
    public rootComposition: Readonly<Composition>
    public parentComposition: Readonly<Composition> | null
    public parameters: T
    public resolver: DependencyResolver
    constructor(properties?: Partial<PreRenderingRequest<T>>);
    public clone(patch: Partial<PreRenderingRequest<T>>): PreRenderingRequest<T>
}
