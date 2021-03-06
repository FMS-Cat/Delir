import * as Delir from '@ragg/delir-core'
import { OperationContext } from '@ragg/fleur'

import { EditorActions } from '../../Editor/actions'
import { Command } from '../../History/HistoryStore'
import { ProjectActions } from '../actions'

export class RemoveLayerCommand implements Command {
    constructor(
        private parentCompositionId: string,
        private removedLayer: Delir.Entity.Layer,
        private beforeRemoveIndex: number,
    ) {}

    public undo(context: OperationContext<any>) {
        this.focusToParentComposition(context)

        context.dispatch(ProjectActions.addLayerAction, {
            targetCompositionId: this.parentCompositionId,
            layer: this.removedLayer,
        })

        context.dispatch(ProjectActions.moveLayerOrderAction, {
            parentCompositionId: this.parentCompositionId,
            targetLayerId: this.removedLayer.id,
            newIndex: this.beforeRemoveIndex,
        })
    }

    public redo(context: OperationContext<any>) {
        this.focusToParentComposition(context)

        context.dispatch(ProjectActions.removeLayerAction, {
            targetLayerId: this.removedLayer.id,
        })
    }

    private focusToParentComposition(context: OperationContext<any>) {
        context.dispatch(EditorActions.changeActiveCompositionAction, {
            compositionId: this.parentCompositionId,
        })
    }
}
