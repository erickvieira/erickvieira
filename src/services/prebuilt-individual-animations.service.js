import { anim } from './animation.service'

export function easeIn(target, duration) {
    anim.fromTo(target, duration || 1, { 
        opacity: 0,
    }, {
        opacity: 1,
    })
}