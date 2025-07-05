export const debounce = (fn, timeout) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { fn.apply(this, args) }, timeout)
    }
}

export const opDebounce = (fn, timeout, { leading = false } = {}) => {
    let timer
    let ldcal = leading

    return (...args) => {
        if (leading && ldcal) { fn.apply(this, args) ; ldcal = false }

        clearTimeout(timer)

        timer = setTimeout(() => {
            if (!leading) { fn.apply(this, args) }
            ldcal = leading
        }, timeout)
    }
}
