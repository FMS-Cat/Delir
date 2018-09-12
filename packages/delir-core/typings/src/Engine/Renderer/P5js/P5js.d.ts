import Expression from '../../../Values/Expression'
import PreRenderingRequest from '../../PreRenderingRequest'
import RenderingRequest from '../../RenderRequest'
import { IRenderer } from '../RendererBase'
interface SketchRendererParams {
    sketch: Expression
}
export default class P5jsRenderer implements IRenderer<SketchRendererParams> {
    public static readonly rendererId: string
    public static provideAssetAssignMap(): {}
    public static provideParameters(): import ('PluginSupport/ParamTypeDescriptor').TypeDescriptor
    private vmGlobal
    private vmScope
    private p5ex
    private canvas
    private makeVmScopeVariables
    public beforeRender(req: PreRenderingRequest<SketchRendererParams>): Promise<void>
    public render(req: RenderingRequest<SketchRendererParams>): Promise<void>
}
export {}
