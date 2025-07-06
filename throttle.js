export const throttle = (fn, delay) => {
    let coldwn = false
    return (...args) => {
        if (coldwn) return
        fn(...args)
        coldwn = true
        setTimeout(() => {
            coldwn = false
        }, delay)
    }
}

export const opThrottle = (func, delay, options = {}) => {    
    let timer = null, last = null, trargs = null
    return function (...args) {
        if(timer) { last = this ; trargs = args ; return }
        if(options.leading){ func.call(this, ...args) } else { last = this
            trargs = args}
        const coldwn = () => {
            if(options.trailing && trargs) { func.call(last, ...trargs) ; last = null ; trargs = null
                timer = setTimeout(coldwn, delay)
            } else { timer = null }
        }
    timer = setTimeout(coldwn, delay)
    }
}