import * as React from 'react'

import * as monaco from 'monaco-editor'
import MonacoUtil from '../../utils/Monaco'

import Button from '../../components/Button'

import { ParameterTarget } from '../../domain/Editor/types'
import { EditorResult } from './KeyframeEditor'

import * as s from './ExpressionEditor.styl'

interface Props {
    title: string | null
    code: string | null
    target: ParameterTarget
    onClose: (result: EditorResult) => void
}

export default class ExpressionEditor extends React.Component<Props> {
    private _editor: monaco.editor.IStandaloneCodeEditor
    private editorElement: HTMLDivElement

    public componentDidMount()
    {
        this._editor = monaco.editor.create(this.editorElement, {
            language: 'javascript',
            codeLens: true,
            automaticLayout: true,
            theme: 'vs-dark',
            minimap: {enabled: false},
            value: this.props.code ? this.props.code : '',
        })

        this._editor.createContextKey('cond1', true)
        this._editor.createContextKey('cond2', true)
        this._editor.onDidFocusEditorText(this.onFocusEditor)
        this._editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, this.closeWithSave, 'cond1')
    }

    public shouldComponentUpdate(nextProps: Props, nextState: {})
    {
        // Only update contents on target entity changed
        // (Guard from parent component controll to reset content)
        return nextProps.target.entityId !== this.props.target.entityId
    }

    public componentDidUpdate()
    {
        this._editor.setValue(this.props.code ? this.props.code : '')
    }

    public render()
    {
        const {title} = this.props

        return (
            <div className={s.ExpressionEditor}>
                <div className={s.ExpressionEditor__Toolbar}>
                    <span className={s.ExpressionEditor__Title}>Expression: {title}</span>
                    <Button type='normal' onClick={this.closeWithoutSave}>変更を破棄</Button>
                    <Button type='primary' onClick={this.closeWithSave}>保存</Button>
                </div>
                <div ref={this.bindEditorElement} className={s.ExpressionEditor__Editor} />
            </div>
        )
    }

    private bindEditorElement = (el: HTMLDivElement) =>
    {
        this.editorElement = el
    }

    private onFocusEditor = () => {
        MonacoUtil.activateLibrarySet('expressionEditor')
    }

    private closeWithSave = () =>
    {
        this.props.onClose({
            saved: true,
            code: this._editor.getValue(),
            target: this.props.target
        })
    }

    private closeWithoutSave = () =>
    {
        this.props.onClose({
            saved: false,
            code: null,
            target: this.props.target
        })
    }
}
