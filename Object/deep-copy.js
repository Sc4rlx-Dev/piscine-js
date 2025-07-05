export const deepCopy = (inp) => {
    let res = []
    if (Array.isArray(inp)) {
        inp.forEach((c) => { if (Array.isArray(c)) { res.push(deepCopy(c)) } else { res.push(c) } })
    } else { return {...inp}}
    return res
}

// simple object
// const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
// const copyAndCompare = (eqFn, obj) => {
//     const copiedObj = deepCopy(obj);
//     return eqFn(obj, copiedObj);
// };
// console.log(copyAndCompare(eq, { user: 'mika', age: 37 }));