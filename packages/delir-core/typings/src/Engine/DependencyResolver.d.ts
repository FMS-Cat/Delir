import { Project } from '../Entity'
import PluginRegistry from '../PluginSupport/plugin-registry'
import { EffectPluginClass } from '../PluginSupport/PostEffectBase'
import AssetProxy from './AssetProxy'
export default class DependencyResolver {
    private _project
    private _pluginRegistry
    constructor(project: Project, pluginRegistry: PluginRegistry);
    public resolveAsset(assetId: string): AssetProxy | null
    public resolveComp(compId: string): import ('Entity/Composition').default | null
    public resolvePlugin(pluginName: string): typeof import ('PluginSupport/PostEffectBase').default
    public resolveEffectPlugin(pluginId: string): EffectPluginClass | null
}
