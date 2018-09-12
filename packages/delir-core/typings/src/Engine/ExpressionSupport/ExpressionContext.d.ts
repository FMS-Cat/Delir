import { ParameterValueTypes } from '../../PluginSupport/ParamTypeDescriptor'
import RenderingRequest from '../RenderRequest'
import { ExpressionContext } from './ExpressionVM'
export interface ContextSource {
    req: RenderingRequest
    clipProperties: {
        [propName: string]: ParameterValueTypes;
    }
    currentValue: any
}
export declare const buildContext: (contextSource: ContextSource) => ExpressionContext
export declare const expressionContextTypeDefinition = '\ndeclare const ctx: {\n    time: number\n    frame: number\n    timeOnComposition: number\n    frameOnComposition: number\n    width: number\n    height: number\n    audioBuffer: Float32Array[]\n    duration: number\n    durationFrames: number\n    clipProp: {[propertyName: string]: any}\n    currentValue: any\n}\n\ndeclare const time: number;\ndeclare const time: number;\ndeclare const frame: number;\ndeclare const timeOnComposition: number;\ndeclare const frameOnComposition: number;\ndeclare const width: number;\ndeclare const height: number;\ndeclare const audioBuffer: Float32Array[];\ndeclare const duration: number;\ndeclare const durationFrames: number;\ndeclare const clipProp: {[propertyName: string]: any};\ndeclare const currentValue: any;\n'
