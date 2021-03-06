import * as Delir from '@ragg/delir-core'
import { OperationContext } from '@ragg/fleur'

import { EditorActions } from '../../Editor/actions'
import { Command } from '../../History/HistoryStore'
import { ProjectActions } from '../actions'

export class AddEffectIntoClipCommand implements Command {
    constructor(
        private clipId: string,
        private addedEffect: Delir.Entity.Effect
    ) {}

    public undo(context: OperationContext<any>) {
        this.focusToParentClip(context)

        context.dispatch(ProjectActions.removeEffectFromClipAction, {
            holderClipId: this.clipId,
            targetEffectId: this.addedEffect.id,
        })
    }

    public redo(context: OperationContext<any>) {
        this.focusToParentClip(context)

        context.dispatch(ProjectActions.addEffectIntoClipAction, {
            clipId: this.clipId,
            effect: this.addedEffect,
        })
    }

    private focusToParentClip(context: OperationContext<any>) {
        context.dispatch(EditorActions.changeActiveClipAction, {
            clipId: this.clipId,
        })
    }
}
