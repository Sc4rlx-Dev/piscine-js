const replica = (...objects) => {
    const res = {}

    for (const obj of objects) {
        if (typeof obj !== 'object' || obj === null) {continue}

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const value = obj[key]
                const rv = res[key]
                if (typeof value === 'object' && value !== null && !Array.isArray(value) ) {
                    if (typeof rv === 'object' && rv !== null && !Array.isArray(rv)) {
                        res[key] = replica(rv, value)
                    } else { res[key] = replica(value) }
                } else { res[key] = value }
            }
        }
    }
    return res
}


// console.log(replica(
//     { a: 1, b: { c: 2 } },
//     { b: { d: 3 }, e: 4 }
// ))

// console.log(replica(
//     { x: { y: { z: 5 } } },
//     { x: { y: { w: 6 } } }
// ))

// console.log(replica(
//     { foo: 'bar' },
//     { baz: 'qux' }
// ))

// console.log(replica(
//     { nested: { a: 1 } },
//     { nested: null }
// ))

// console.log(replica(
//     { arr: [1, 2, 3] },
//     { arr: [4, 5] }
// ))
// { a: 1, b: { c: 2, d: 3 }, e: 4 }
// { x: { y: { z: 5, w: 6 } } }
// { foo: 'bar', baz: 'qux' }
// { nested: null }
// { arr: [ 4, 5 ] }
