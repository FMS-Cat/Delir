// @flow
import type {DelirPluginPackageJson} from './types'

import fs from 'fs-promise'
import path from 'path'
import _ from 'lodash'

import * as Validators from './validators'
import {PluginLoadFailException} from '../exceptions/'

export default class PluginRegistory
{
    static PluginFeatures = Object.freeze({
        Effect: 'Effect',
        CustomLayer: 'CustomLayer',
        // CustomLayer: 'CustomLayer',
        ExpressionExtension: 'ExpressionExtension',
    })

    _plugins: {
        [packageName: string]: {
            package: Object,
            class: Class<*>,
            packageRoot: string,
            entryPath: string,
        }
    } = {}

    constructor()
    {

    }

    /**
     * Load packages from packages directory
     * @param {string} packageDir
     */
    async loadPackageDir(packageDir: string) {
        const dirs = await fs.readdir(packageDir)

        const packages = {}
        const failedPackages = []
        await Promise.all(dirs.map(async dir => {
            try {
                let packageRoot = path.join(packageDir, dir)
                let content = await fs.readFile(path.join(packageRoot, 'package.json'))
                let json: DelirPluginPackageJson = JSON.parse(content)
                let entryPath = path.join(packageRoot, 'index')

                if (json.main) {
                    entryPath = path.join(packageRoot, json.main)
                }

                Validators.delirPackageJson(json)

                packages[json.name] = {
                    package: json,
                    packageRoot,
                    entryPath,
                }
            } catch (e) {
                failedPackages.push({package: dir, reason: e.message})
            }
        }))

        _.each(packages, (packageInfo, id) => {
            this._plugins[id] = packageInfo
            this.requireById(id)
        })

        return {
            packages: _.cloneDeep(packages),
            failed: failedPackages,
        }
    }

    requireById(packageId: string): ?Class<*>
    {
        const pluginInfo = this._plugins[packageId]

        if (! pluginInfo) {
            return
        }

        if (pluginInfo.class != null) {
            return pluginInfo.class
        }

        try {
            // avoid webpack module resolving
            const _class = global.require(pluginInfo.entryPath)

            // resolve babel's module exposing
            if (_class.__esModule && _class.default) {
                pluginInfo.class = _class.default
            } else {
                pluginInfo.class = _class
            }

            pluginInfo.class.pluginDidLoad()
        } catch (e) {
            throw new PluginLoadFailException(`Failed to requiring plugin \`${packageId}\`. ${e.message}`)
        }
    }

    getLoadedPackageByType(type: PluginFeatures) {
        return _.filter(this._plugins, entry => _.get(entry, 'package.delir.feature').includes(type))
    }
}
