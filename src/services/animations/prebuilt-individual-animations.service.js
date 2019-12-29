import { anim } from './animation.service'

export function easeIn(target, duration) {
    anim.fromTo(target, duration || 1, { 
        opacity: 0,
    }, {
        opacity: 1,
    })
}

export function getInVer(target, from) {
    const directions = {
        'top': -100,
        'bottom': 100,
    }
    anim.fromTo(target, 1, { 
        y: directions[from] || -100
    }, {
        y: 0,
    })
}