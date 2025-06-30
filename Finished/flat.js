function flat(arr, d = 1) {
    const res = []
    for (const e of arr) {
        if (Array.isArray(e) && d > 0) {
            res.push(...flat(e, d - 1))
        } else {
            res.push(e)
        }
    }
    return res
}
