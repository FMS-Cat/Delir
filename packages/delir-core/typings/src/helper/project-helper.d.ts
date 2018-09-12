import { Asset, Clip, Composition, Effect, Keyframe, Layer, Project } from '../Entity'
import Expression from '../Values/Expression'
export declare function normalizeClip(clip: Clip): Clip
export declare function normalizeKeyframe(kf: Keyframe): Keyframe<import ('Entity/Keyframe').KeyframeValueTypes>
export declare function addAsset(project: Project, asset: Asset): Asset
export declare function addComposition(project: Project, composition: Composition): Composition
export declare function addLayer(project: Project, targetCompositionId: Composition | string, layer: Layer): Layer
export declare function addClip(project: Project, targetLayerId: Layer | string, clip: Clip): Clip
export declare function addEffect(project: Project, targetClipId: Clip | string, effect: Effect): Effect
export declare function addKeyframe(project: Project, targetClipId: Clip | string, propName: string, keyframe: Keyframe | Keyframe[]): Keyframe | Keyframe[]
export declare function addEffectKeyframe(project: Project, targetClipId: Clip | string, targetEffectId: Effect | string, propName: string, keyframe: Keyframe | Keyframe[]): Keyframe | Keyframe[] | null
export declare function deleteAsset(project: Project, targetAssetId: Asset | string): void
export declare function deleteComposition(project: Project, targetCompositionId: Composition | string): void
export declare function deleteLayer(project: Project, targetLayerId: Layer | string): void
export declare function deleteClip(project: Project, targetClipId: Clip | string): void
export declare function deleteEffectFromClip(project: Project, parentClipId: Clip | string, targetEffectId: Effect | string): void
export declare function deleteKeyframe(project: Project, targetKeyframeId: Keyframe | string): void
export declare function deleteEffectKeyframe(project: Project, clipId: string, effectId: string, targetKeyframeId: string): void
export declare function modifyAsset(project: Project, targetAssetId: Asset | string, patch: Partial<Asset>): void
export declare function modifyComposition(project: Project, targetCompositionId: Composition | string, patch: Partial<Composition>): void
export declare function modifyLayer(project: Project, targetLayerId: Layer | string, patch: Partial<Layer>): void
export declare function modifyClip(project: Project, targetClipId: Clip | string, patch: Partial<Clip>): void
export declare function modifyClipExpression(project: Project, targetClipId: Clip | string, property: string, expr: Expression): void
export declare function modifyEffectExpression(project: Project, targetClipId: Clip | string, targetEffectId: Effect | string, property: string, expr: Expression): void
export declare function modifyEffect(project: Project, parentClipId: Clip | string, targetEffectId: Effect | string, patch: Partial<Effect>): void
export declare function modifyEffectKeyframe(project: Project, effectHolderClipId: Clip | string, kfHolderEffectId: Effect | string, targetKeyframeId: Keyframe | string, patch: Partial<Keyframe>): void
export declare function modifyKeyframe(project: Project, targetKeyframeId: Keyframe | string, patch: Partial<Keyframe>): void
export declare function moveLayerOrder(project: Project, compositionId: string, layerId: string, newIndex: number): void
export declare function findAssetById(project: Project, assetId: string): Asset | null
export declare function findCompositionById(project: Project, compositionId: string): Composition | null
export declare function findLayerById(project: Project, layerId: string): Layer | null
export declare function findClipById(project: Project, clipId: string): Clip | null
export declare function findEffectFromClipById(clip: Clip, effectId: string): Effect | null
export declare function findParentCompositionByLayerId(project: Project, layerId: string): Composition | null
export declare function findParentLayerByClipId(project: Project, clipId: string): Layer | null
export declare function findKeyframeFromClipById(clip: Clip, keyframeId: string): Keyframe | null
export declare function findKeyframeFromEffectById(effect: Effect, keyframeId: string): Keyframe | null
export declare function findKeyframeById(project: Project, keyframeId: string): Keyframe | null
export declare function findKeyframeFromClipByPropAndFrame(clip: Clip, propName: string, frameOnClip: number): Keyframe | null
export declare function findKeyframeFromEffectByPropAndFrame(effect: Effect, propName: string, frameOnClip: number): Keyframe | null
export declare function findParentClipAndPropNameByKeyframeId(project: Project, keyframeId: string): {
    clip: Clip;
    propName: string;
} | null
