import { listen, OperationContext, Store } from '@ragg/fleur'

import { EditorActions } from '../Editor/actions'
import { HistoryActions } from './actions'

export interface Command {
    undo(context: OperationContext<any>): void
    redo(context: OperationContext<any>): void
}

interface State {
    undoStack: Command[]
    redoStack: Command[]
}

export default class HistoryStore extends Store<State> {
    public static storeName = 'HistoryStore'

    public state: State = {
        undoStack: [],
        redoStack: [],
    }

    private handleChangeProject = listen(EditorActions.clearActiveProjectAction, () => {
        this.updateWith(draft => {
            draft.undoStack = []
            draft.redoStack = []
        })
    })

    private handlePushHistory = listen(HistoryActions.pushHistory, ({ command }) => {
        this.updateWith(draft => {
            draft.redoStack = []
            draft.undoStack.push(command)
        })
    })

    private handleUndoing = listen(HistoryActions.undoing, () => {
        this.updateWith(draft => {
            const command = draft.undoStack.pop()
            command && draft.redoStack.push(command)
        })
    })

    private handleRedoing = listen(HistoryActions.redoing, () => {
        this.updateWith(draft => {
            const command = draft.redoStack.pop()
            command && draft.undoStack.push(command)
        })
    })

    public getUndoCommand(): Command | void {
        return this.state.undoStack[this.state.undoStack.length - 1]
    }

    public getRedoCommand(): Command | void {
        return this.state.redoStack[this.state.redoStack.length - 1]
    }
}
