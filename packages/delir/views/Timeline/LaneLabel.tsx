import * as Delir from '@ragg/delir-core'
import { ContextProp, withComponentContext } from '@ragg/fleur-react'
import * as classnames from 'classnames'
import * as React from 'react'
import { SortableElement, SortableHandle } from 'react-sortable-hoc'

import * as ProjectOps from '../../domain/Project/operations'

import { ContextMenu, MenuItem, MenuItemOption } from '../../components/ContextMenu'
import LabelInput from '../../components/label-input'

import t from './LaneLabel.i18n'
import * as s from './LaneLabel.styl'

interface OwnProps {
    layer: Delir.Entity.Layer

    /**
     * Layer select handler
     */
    onSelect: (layerId: string) => any

    /** Layer remove handler */
    onRemove: (layerId: string) => any
}

type Props = OwnProps & ContextProp

const SortHandle = SortableHandle(() => (
    <i className='fa fa-bars' />
))

const LaneLabel = withComponentContext(class LaneLabel extends React.Component<Props> {
    private layerNameInput: LabelInput

    public render()
    {
        const { layer } = this.props

        return (
            <ul key={layer.id} className={s.LaneLabel}>
                <ContextMenu>
                    <MenuItem type='separator' />
                    {/*<MenuItem label='複製' onClick={() => {}} />*/}
                    <MenuItem label={t('contextMenu.renameLayer')} onClick={this.focusToLayerNameInput} />
                    <MenuItem label={t('contextMenu.removeLayer')} data-layer-id={layer.id} onClick={this.onRemove} />
                    <MenuItem type='separator' />
                </ContextMenu>

                <li className={classnames(s.LaneLabel_Col, s['LaneLabel_Col--Handle'])}>
                    <SortHandle />
                </li>

                <li className={classnames(s.LaneLabel_Col, s['LaneLabel_Col--col-name'])} data-layer-id={layer.id} onClick={this.onSelect}>
                    <LabelInput ref={this.bindLayerNameInput} defaultValue={layer.name} placeholder='Layer name' onChange={this.layerNameChanged} />
                </li>
                <li className={classnames(s.LaneLabel_Col, s['LaneLabel_Col--col-visibility'])}>
                    <i className='twa twa-eye' />
                </li>
                <li className={classnames(s.LaneLabel_Col, s['LaneLabel_Col--col-lock'])}>
                    <i className='twa twa-lock' />
                </li>
            </ul>
        )
    }

    private layerNameChanged = (value: string) =>
    {
        const {layer} = this.props

        this.props.context.executeOperation(ProjectOps.modifyLayer, {
            layerId: layer.id!,
            patch: {name: value}
        })
    }

    private focusToLayerNameInput = () =>
    {
        this.layerNameInput.enableAndFocus()
    }

    private bindLayerNameInput = (el: LabelInput) => this.layerNameInput = el

    private onSelect = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => this.props.onSelect(currentTarget.dataset.layerId!)

    private onRemove = ({ dataset }: MenuItemOption<{layerId: string}>) => this.props.onRemove(dataset.layerId)
})

export default SortableElement((props: OwnProps) => (
    <LaneLabel layer={props.layer} onSelect={props.onSelect} onRemove={props.onRemove} />
))
