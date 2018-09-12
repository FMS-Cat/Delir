import { Keyframe, KeyframeValueTypes } from '../Entity'
import { AnyParameterTypeDescriptor, TypeDescriptor } from '../PluginSupport/ParamTypeDescriptor'
interface KeyFrameLink<T extends KeyframeValueTypes> {
    previous: Keyframe<T> | null
    active: Keyframe<T>
    next: Keyframe<T> | null
}
export interface KeyframeParamValueSequence {
    [frame: number]: KeyframeValueTypes
}
export declare function calcKeyframeValuesAt(frame: number, clipPlacedFrame: number, descriptor: TypeDescriptor, keyframes: {
    [paramName: string]: Keyframe[];
}): {
    [paramName: string]: KeyframeValueTypes;
}
export declare function calcKeyframeValueAt(frame: number, clipPlacedFrame: number, desc: AnyParameterTypeDescriptor, keyframes: Keyframe[]): KeyframeValueTypes
export declare function calcKeyFrames(paramTypes: TypeDescriptor | AnyParameterTypeDescriptor[], keyFrames: {
    [paramName: string]: Keyframe[];
}, clipPlacedFrame: number, beginFrame: number, calcFrames: number): {
    [paramName: string]: KeyframeParamValueSequence;
}
export declare function calcKeyframe(propDesc: AnyParameterTypeDescriptor, keyFrameSequense: Keyframe[], clipPlacedFrame: number, beginFrame: number, calcFrames: number, transformer: (rate: number, frame: number, keyFrameLink: KeyFrameLink<KeyframeValueTypes>) => any): KeyframeParamValueSequence
export {}
