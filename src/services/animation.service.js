
import { CSSPlugin, gsap } from "gsap"

export const anim = ((g) => {
    g.registerPlugin(CSSPlugin)
    g.defaults({
        transformOrigin: 'center center'
    })
    return g.core.Tween
})(gsap)