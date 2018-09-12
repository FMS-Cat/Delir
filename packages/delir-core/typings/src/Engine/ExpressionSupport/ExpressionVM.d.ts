interface ExpressionVMOption {
    filename?: string
}
export interface ExpressionContext {
    time: number
    frame: number
    timeOnComposition: number
    frameOnComposition: number
    width: number
    height: number
    audioBuffer: Float32Array[] | null
    duration: number
    durationFrames: number
    clipProp: {
        [paramName: string]: any;
    }
    currentValue: any
}
export default class ExpressionVM {
    public static execute<Result = any>(code: string, context: ExpressionContext, options?: ExpressionVMOption): Result
}
export {}
