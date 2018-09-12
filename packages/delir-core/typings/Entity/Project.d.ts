import Asset from './Asset'
import Composition from './Composition'
export default class Project {
    public formatVersion: string
    public assets: Asset[]
    public compositions: Composition[]
}
