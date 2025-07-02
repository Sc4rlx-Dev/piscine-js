export const invert = (obj) => {
    let res = {}
    for (let key in obj) {
        res[obj[key]] = key
    }
    return res
}





// console.log(invert({foo : 'jjjj'}))
console.log(invert({ language: 'english' }))

