import _ from 'lodash'
import {ReduceStore} from 'flux/utils'

import Delir from 'delir-core'
const {Helper: DelirHelper} = Delir

import dispatcher from '../dispatcher'

class ProjectStore extends ReduceStore<Object>
{
    getInitialState(): Object
    {
        return {
            project: null,
            activeComp: null,
            activeLayer: null,
            renderFrame: null,
        }
    }

    reduce(state: Object, action: Object)
    {
        switch (action.type) {
        case 'project-init':
            return Object.assign({}, state, {project: action.payload})

        case 'change-active-composition':
            if (! state.project) {
                return state
            }

            let targetComp = _.find(Array.from(state.project.compositions.values()), {id: action.payload})
            return Object.assign({}, state, {activeComp: targetComp})

        case 'change-active-layer':
            if (! state.project) {
                return state
            }

            if (action.layer == null) {
                return Object.assign({}, state, {activeLayer: null})
            }

            let targetLayer = DelirHelper.findLayerById(action.payload)
            return Object.assign({}, state, {activeLayer: layer})

        case 'move-layer-to-timelane': return (() => {
            const {layerId, timelaneId} = action.payload

            const targetLayer = DelirHelper.findLayerById(state.project, layerId)
            const sourceLane = DelirHelper.findParentTimelaneByLayerId(state.project, layerId)
            const destLane = DelirHelper.findTimelaneById(state.project, timelaneId)

            // console.log(sourceLane.layers.has(targetLayer))
            // console.log(sourceLane.layers.delete(targetLayer))

            sourceLane.layers.delete(targetLayer)
            destLane.layers.add(targetLayer)

            return Object.assign({}, state)
        })()

        case 'mod-composition-name': return (() => {
            if (! state.project) {
                return
            }

            const targetComp = DelirHelper.findCompositionById(state.project, action.payload.compId)
            console.log(targetComp);
            targetComp.name = action.payload.newName
            return Object.assign({}, state)
        })()

        }

        return state
    }
}

export default new ProjectStore(dispatcher)
