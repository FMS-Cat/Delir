import AssetPointer from '../Values/AssetPointer'
import ColorRGB from '../Values/ColorRGB'
import ColorRGBA from '../Values/ColorRGBA'
import Expression from '../Values/Expression'
export declare type KeyframeValueTypes = number | boolean | string | ColorRGB | ColorRGBA | Expression | AssetPointer | null
export default class Keyframe<T extends KeyframeValueTypes = KeyframeValueTypes> {
    public id: string
    public value: T
    public frameOnClip: number
    /**
     * right top is [1, 1]
     *     ◇ < previous keyframe to this keyframe
     * ◇───┘ < ease-in
     */
    public easeInParam: [number, number]
    /**
     * left bottom is [0, 0]
     *     ◇ < next keyframe
     * ◇───┘ < this keyframe to next keyframe, ease-out
     */
    public easeOutParam: [number, number]
    constructor();
}
