import * as Delir from '@ragg/delir-core'
import { action } from '@ragg/fleur'

import { DragEntity } from './operations'
import { ClipboardEntry, ParameterTarget } from './types'

export const EditorActions = {
    setActiveProjectAction: action<{ project: Delir.Entity.Project, path?: string | null }>(),
    clearActiveProjectAction: action<{}>(),
    setDragEntityAction: action<DragEntity>(),
    clearDragEntityAction: action<{}>(),
    changeActiveCompositionAction: action<{ compositionId: string }>(),
    changeActiveClipAction: action<{ clipId: string }>(),
    changeActiveParamAction: action<{ target: ParameterTarget | null }>(),
    startPreviewAction: action<{ compositionId: string, beginFrame: number, ignoreMissingEffect: boolean }>(),
    stopPreviewAction: action<{}>(),
    renderDestinateAction: action<{ compositionId: string, ignoreMissingEffect: boolean }>(),
    updateProcessingStateAction: action<{ stateText: string }>(),
    addMessageAction: action<{ id: string, title?: string, level: 'info' | 'error', message: string, detail?: string }>(),
    removeMessageAction: action<{ id: string }>(),
    seekPreviewFrameAction: action<{ frame: number }>(),
    setClipboardEntry: action<{ entry: ClipboardEntry }>(),
    changePreferenceOpenStateAction: action<{ open: boolean }>()
}
