import { anim } from './animation.service'
import { Bounce } from 'gsap/all'

export function popIn(target, duration, delay) {
    anim.staggerFromTo(target, duration || .2, { 
        opacity: 0,
        scale: 0.9,
        ease: Bounce.easeOut
    }, {
        opacity: 1,
        scale: 1,
        ease: Bounce.easeOut
    }, delay || .05)
}