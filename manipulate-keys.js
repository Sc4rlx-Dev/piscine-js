const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }



export const filterKeys = (obj , func) => {
    const res = {}
  Object.entries(obj).forEach(([k, v]) => { 
        if(func(k)){
            res[k] = v
        }
    })
return res
}

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

export const mapKeys = (obj2 , func) => {
    const res = {}
    Object.entries(obj2).forEach(([k,v]) =>{
        res[func(k)] = v
    // res[v] = func(k) 
    })
return res
}

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }



export const reduceKeys = (obj3 , func , acc) => {
    const res = {}
    if (typeof acc === 'undefined') {
        return
    } else {
        Object.entries(obj3).forEach(([k]) => {
            res = func(res , k)
        })
    }
return res
}
// export const reduceKeys = (obj3 , func , acc) => {
//     return Object.keys(obj3).reduce((acc, key) => {
//         return func(acc, key)
//     }, acc)
// }



console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)))
// output: carbohydrates, protein, fat


