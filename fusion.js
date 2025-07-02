export const fusion = (t , s ) => {

// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
// // -> { arr: [ 1, '2', 2 ] }
    let res = Object.assign(t)

    for (const key in s) {
        if (Array.isArray(s[key]) && Array.isArray(res[key])) {
            res[key] = [...res[key], ...s[key]]
        } else if (typeof s[key] === 'string' && typeof res[key] === 'string') {
            res[key] = `${res[key]} ${s[key]}`
        } else if (typeof s[key] === 'number' && typeof res[key] === 'number' ) {
            res[key] = res[key] + s[key]
        } else if (typeof s[key] === 'object' && typeof res[key] === 'object') {
            // res[key] = s[key]
            // res[key] = fusion(res[key] , s[key])
        }
    }

return res
}

// console.log(fusion({ arr: [1, 2 , 3] }, { arr: [4] }))

// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
// -> { arr: [ 1, '2', 2 ] }

// console.log(fusion({ str: "salem" }, { str: "alem" }))
// -> { str: 'salem alem' }

// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }))
// -> { a: 20, b: 10, c: 1 }

console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))// -> { a: 11, x: [], b: { c: 'Salem alem' } }

