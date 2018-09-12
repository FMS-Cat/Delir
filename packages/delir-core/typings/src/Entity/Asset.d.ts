export default class Asset {
    public id: string
    public mimeType: string
    /** Asset file extension (without `.` prefix) */
    public fileType: string
    public name: string
    public path: string
    constructor();
}
