import { Expression } from '../Values'
import Keyframe from './Keyframe'
export default class Effect {
    public id: string
    public processor: string
    public keyframes: {
        [keyName: string]: Keyframe[];
    }
    public expressions: {
        [keyName: string]: Expression;
    }
    constructor();
}
