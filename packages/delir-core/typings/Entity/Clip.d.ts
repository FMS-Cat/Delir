import { AvailableRenderer } from '../Engine/Renderer'
import { Expression } from '../Values'
import Effect from './Effect'
import Keyframe from './Keyframe'
export default class Clip {
    public id: string
    public renderer: AvailableRenderer
    public placedFrame: number
    public durationFrames: number
    public keyframes: {
        [paramName: string]: Keyframe[];
    }
    public expressions: {
        [paramName: string]: Expression;
    }
    public effects: Effect[]
    constructor();
}
