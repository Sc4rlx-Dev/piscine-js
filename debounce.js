export const debounce = (fn, timeout) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { fn.apply(this, args) }, timeout)
    }
}

export const opDebounce = (fn, timeout, { ld = false } = {}) => {
    let isld = ld
    
    const d = debounce((...args) => {
        if (!ld) {
            fn.apply(this, args)
        }
        isld = ld
    }, timeout)

    return (...args) => {
        if (isld) {
            fn.apply(this, args)
            isld = false
        }
        d(...args)
    }
}
