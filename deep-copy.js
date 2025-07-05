export const deepCopy = (inp) => {
    let res = []
    if (Array.isArray(inp)) {
        inp.forEach((c) => { if (Array.isArray(c)) { res.push(deepCopy(c)) } else { res.push(c) } })
    }
    return res
}