
import { CSSPlugin, gsap } from "gsap"

export const anim = ((g) => {
    g.registerPlugin(CSSPlugin)
    g.defaults({
        transformOrigin: 'center center'
    })
    return g.core.Tween
})(gsap)

export const tl = ((g) => (props) => {
    g.registerPlugin(CSSPlugin)
    g.defaults({
        transformOrigin: 'center center'
    })
    return new g.core.Timeline(props)
})(gsap)