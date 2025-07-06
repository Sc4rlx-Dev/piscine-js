export const throttle = (fn , tm )=> {
let timer 
return (...args) => {
    if(timer !== undefined){ return }

    timer = setTimeout(() => {
        timer = undefined
    },tm)
    return fn(...args)
    }
}

export const opThrottle = (fn , tm , {ld = false  , tr = true} = {}) => {
    let timer 
    let larg 

    const throttled = (...args) => {
        if(timer) {
            larg = args
            return
        }
        if(ld){
            fn.apply(this , args)
        } else {
            larg = args
        }

        const timecall = () => {
            if (tr && larg) {
                fn.apply(this , larg)
                larg = null
            }
            timer = null
        }

        timer = setTimeout(timecall , tm)
    }
return throttled
}

