import _ from 'lodash'
import * as uuid from 'uuid'
import * as classnames from 'classnames'
import * as React from 'react'
import {PropTypes} from 'react'
import * as Delir from 'delir-core'
import connectToStores from '../../utils/connectToStores'

import EditorStateActions from '../../actions/editor-state-actions'
import ProjectModifyActions from '../../actions/project-modify-actions'

import RendererService from '../../services/renderer'

import {default as EditorStateStore, EditorState} from '../../stores/editor-state-store'
import {default as ProjectModifyStore, ProjectModifyState} from '../../stores/project-modify-store'

import Workspace from '../components/workspace'
import Pane from '../components/pane'

import {ContextMenu, MenuItem} from '../electron/context-menu'
import SelectList from '../components/select-list'

import LaneLabel from '../timeline/lane-label'
import LaneKeyframes from '../timeline/lane-keyframes'
import KeyframeView from '../KeyframeView'
import ClipSpace from './_ClipSpace'
import Gradations from './_Gradations'

import s from './style.styl'

interface TimelineViewProps {
    editor: EditorState,
    project: ProjectModifyState,
}

interface TimelineViewState {
    timelineScrollTop: number,
    cursorHeight: number,
    scale: number,
    selectedLaneId: number|null,
}

const PX_PER_SEC = 30

/**
 * Timeline structure:
 *
 * Timeline
 *   └ Layer
 *     └ LayerLabel
 *     └ ClipSpace
 *       └ Clip
 */
@connectToStores([EditorStateStore, ProjectModifyStore], context => ({
    editor: EditorStateStore.getState(),
}))
export default class TimelineView extends React.Component<TimelineViewProps, TimelineViewState>
{
    constructor()
    {
        super()

        this.state = {
            timelineScrollTop: 0,
            cursorHeight: 0,
            scale: 1,
            selectedLaneId: null,
        }
    }

    scrollSync(event)
    {
        this.setState({'timelineScrollTop': event.target.scrollTop})
    }

    componentDidMount()
    {
        const {timelineLanes} = this.refs
        this.setState({
            cursorHeight: timelineLanes ? timelineLanes.getBoundingClientRect().height + 1 : 0
        })
    }

    componentDidUpdate()
    {
        this.refs.timelineLabels.scrollTop = this.refs.timelineLanes.scrollTop = this.state.timelineScrollTop
    }

    laneSelected = laneId =>
    {
        this.setState({selectedLaneId: laneId})
    }

    scaleChanged = scale =>
    {
        this.setState({scale: scale})
    }

    addNewLayer = () =>
    {
        if (!this.props.editor.activeComp) return

        ProjectModifyActions.addLayer(
            this.props.editor.activeComp,
            new Delir.Project.Layer
        )
    }

    removeLayer = layerId =>
    {
        if (!this.props.editor.activeComp) return
        ProjectModifyActions.removeLayer(layerId)
    }

    scaleTimeline = e =>
    {
        if (e.altKey) {
            this.setState({scale: this.state.scale + (e.deltaY * .05)})
        }
    }

    dropAsset = e =>
    {
        const {dragEntity, activeComp} = this.props.editor

        if (!activeComp) {
            EditorStateActions.notify('Must be select any composition before add assets to timeline', 'Woops', 'error', 1000)
            return
        }

        if (!activeComp || !dragEntity || dragEntity.type !== 'asset') return
        const {asset} = dragEntity
        ProjectModifyActions.addLayerWithAsset(activeComp, asset)
    }

    onSeekClicked = (frame: number) =>
    {
        console.log(frame)
        EditorStateActions.seekPreviewFrame(frame)
    }

    render()
    {
        const {scale} = this.state
        const {activeComp, activeClip} = this.props.editor
        const {id: compId, framerate} = activeComp ? activeComp : {id: '', framerate: 30}
        const timelineLanes = activeComp ? Array.from(activeComp.layers) : []

        return (
            <Pane className={s.layerView} allowFocus>
                <Workspace direction='vertical'>
                    <Pane>
                        <Workspace direction="horizontal" onDrop={this.dropAsset}>
                            {/* Layer Panel */}
                            <Pane className='timeline-labels-container'>
                                <div className='timeline-labels-header'>
                                    <div className='--col-name'>Lanes</div>
                                    <span>x {scale}</span>
                                    {/*
                                        <div className='--col-visibility'>Label</div>
                                        <div className='--col-lock'>Label</div>
                                    */}
                                </div>

                                <div ref='timelineLabels' className='timeline-labels' onScroll={this.scrollSync.bind(this)}>
                                    <ContextMenu>
                                        <MenuItem type='separator' />
                                        <MenuItem label='Add new layer' onClick={this.addNewLayer} enabled={!!activeComp} />
                                        <MenuItem type='separator' />
                                    </ContextMenu>
                                    {activeComp && (
                                        <SelectList key={compId}>
                                            {timelineLanes.map(lane => (
                                                <LaneLabel key={lane.id} layer={lane} onSelect={this.laneSelected} onRemove={this.removeLayer} />)
                                            )}
                                        </SelectList>
                                    )}
                                </div>
                            </Pane>
                            {/* Layer Panel */}
                            <Pane className='timeline-container' onWheel={this.scaleTimeline}>
                                <Gradations
                                    cursorHeight={this.state.cursorHeight}
                                    scale={this.state.scale}
                                    activeComposition={activeComp}
                                    pxPerSec={PX_PER_SEC}
                                    onSeeked={this.onSeekClicked}
                                />

                                <ul ref='timelineLanes' className='timeline-lane-container' onScroll={this.scrollSync.bind(this)}>
                                    <ContextMenu>
                                        <MenuItem type='separator' />
                                        <MenuItem label='Add new layer' onClick={this.addNewLayer} enabled={!!activeComp} />
                                        <MenuItem type='separator' />
                                    </ContextMenu>
                                    {activeComp && timelineLanes.map(layer => (
                                        <ClipSpace
                                            key={layer.id!}
                                            layer={layer}
                                            framerate={framerate}
                                            pxPerSec={PX_PER_SEC}
                                            scale={this.state.scale}
                                        />
                                    ))}
                                </ul>
                            </Pane>
                        </Workspace>
                    </Pane>
                    <Pane>
                        <KeyframeView activeClip={activeClip} />
                    </Pane>
                </Workspace>
            </Pane>
        )
    }
}