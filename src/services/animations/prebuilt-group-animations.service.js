import { tl } from './animation.service'
import { Bounce, SlowMo } from 'gsap/all'

export function popIn(targets) {
    tl().staggerFromTo(targets, .2, {
        y: 5,
        background: '#eee',
        opacity: 0,
        scale: 0.5,
        ease: Bounce.easeOut,
    }, {
        opacity: 1,
        scale: 1,
        ease: Bounce.easeOut,
    }, .05, 'step1').staggerTo(targets, .1, {
        y: 0,
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        ease: SlowMo.easeOut
    }, .02, 'step2')
}