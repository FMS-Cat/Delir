import { Project } from '../Entity'
import ProgressPromise from '../helper/progress-promise'
import { ParameterValueTypes } from '../PluginSupport/ParamTypeDescriptor'
import PluginRegistry from '../PluginSupport/plugin-registry'
import { ColorRGB, ColorRGBA } from '../Values'
import AssetProxy from './AssetProxy'
import * as ExpressionContext from './ExpressionSupport/ExpressionContext'
import { IRenderingStreamObserver } from './IRenderingStreamObserver'
import RenderingRequest from './RenderRequest'
export interface ExpressionExecuters {
    [paramName: string]: (exposes: ExpressionContext.ContextSource) => ParameterValueTypes
}
interface RenderingOption {
    beginFrame: number
    endFrame: number
    loop: boolean
    ignoreMissingEffect: boolean
}
interface RenderProgression {
    state: string
    isAudioBuffered: boolean
    audioBuffers: Float32Array[]
    currentFrame: number
    rangeEndFrame: number
}
export declare type RealParameterValueTypes = number | string | boolean | ColorRGB | ColorRGBA | AssetProxy | null
export interface RealParameterValues {
    [paramName: string]: RealParameterValueTypes
}
/**
 * Get expression applied values
 */
export declare const applyExpression: (req: RenderingRequest<{
    [propName: string]: RealParameterValueTypes;
}>, beforeExpressionParams: RealParameterValues, expressions: {
    [param: string]: (exposes: ExpressionContext.ContextSource) => RealParameterValueTypes;
}) => {
    [param: string]: RealParameterValueTypes;
}
export default class Engine {
    public project: Project
    public pluginRegistry: PluginRegistry
    private _fpsCounter
    private _seqRenderPromise
    private _project
    private _pluginRegistry
    private _destinationAudioNode
    private _clipRendererCache
    private _effectCache
    private _streamObserver
    private _initStage
    private _taskingStage
    private _renderStage
    public setStreamObserver(observer: IRenderingStreamObserver): void
    public removeStreamObserver(observer: IRenderingStreamObserver): void
    public stopCurrentRendering(): void
    public renderFrame(compositionId: string, beginFrame: number): ProgressPromise<void>
    public renderSequencial(compositionId: string, options?: Partial<RenderingOption>): ProgressPromise<void, RenderProgression>
}
export {}
