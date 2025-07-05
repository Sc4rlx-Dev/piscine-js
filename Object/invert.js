export const invert = (obj) => {
    let res = {}
    Object.entries(obj).forEach(([Key, value]) => {
        res[value] = Key
    })
    return res
}





// console.log(invert({foo : 'jjjj'}))
console.log(invert({ language: 'english' }))
console.log(invert({ f: 5, __proto__: { d: 6 } }), { 5: 'f' })

