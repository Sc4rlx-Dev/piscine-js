export const debounce = (fn, timeout) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { fn.apply(this, args) }, timeout)
    }
}

export const opDebounce = debounce(()=> log('saved'))

// function log(i){
//     console.log(i)
// }

