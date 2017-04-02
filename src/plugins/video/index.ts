import {
    Type,
    TypeDescriptor,
    LayerPluginBase,
    PluginPreRenderRequest,
    RenderRequest,
    Exceptions
} from 'delir-core'

export default class VideoLayer extends LayerPluginBase
{
    static async pluginDidLoad()
    {
        // ✋( ͡° ͜ʖ ͡°) インターフェースに誓って
        if (typeof window === 'undefined') {
            throw new Exceptions.PluginLoadFailException('this plugin only running on Electron')
        }
    }

    static provideParameters(): TypeDescriptor
    {
        return Type
            .asset('source', {
                label: 'Movie file',
                mimeTypes: ['movie/mp4'],
            })
            .bool('loop', {
                label: 'Loop',
                animatable: false,
            })
            .number('x', {
                label: 'Position X',
                animatable: true,
            })
            .number('y', {
                label: 'Position Y',
                animatable: true,
            })
    }

    video: HTMLVideoElement

    async beforeRender(preRenderRequest: PluginPreRenderRequest)
    {
        const parameters = preRenderRequest.parameters as any

        this.video = document.createElement('video')
        this.video.src = `file://${parameters.source.path}`
        this.video.loop = parameters.loop
        this.video.load()
        this.video.currentTime = -1

        await new Promise((resolve, reject) => {
            this.video.addEventListener('loadeddata', () => resolve(), {once: true} as any)
            this.video.addEventListener('error', () => reject(new Error('video not found')), {once: true}  as any)
        })
    }

    async render(req: RenderRequest)
    {
        const param = req.parameters as any
        const ctx = req.destCanvas.getContext('2d')

        await new Promise((resolve, reject) => {
            const waiter = (e: Event) => resolve()
            this.video.addEventListener('seeked', waiter, {once: true} as any)

            if (param.loop) {
                this.video.currentTime = req.timeOnClip % this.video.duration
            } else {
                this.video.currentTime = req.timeOnClip
            }

            setTimeout(waiter, 1000)
        })

        if (ctx == null) { return }
        ctx.drawImage(this.video, param.x, param.y)
    }
}
