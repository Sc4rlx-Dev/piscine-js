export const pick = (obj, str) => {
    if (typeof str === 'string') {
        str = [str]
    }
    let newobj = {}

    Object.entries(obj).forEach(([key, value]) => {
        if (str.includes(key)) {
            newobj[key] = value;
        }
    })
    return newobj
}

export const omit = (obj, str) => {
    
    if (typeof str === 'string') {
        str = [str]
    }
    let newobj = {}

    Object.entries(obj).forEach(([key, value]) => {
        if (!str.includes(key)) {
            newobj[key] = value;
        }
    })
    return newobj
}



// const obj = { a: 1, b: 2, c: 3 }
// const str = 'a'

// console.log(omit(obj, str))


// const obj = { a: 1, b: 2, c: 3 }
// console.log(omit(obj, 'a'))        
// console.log(omit(obj, ['a','b'])) 
// console.log(pick(obj, 'a'))       
// console.log(pick(obj, ['a','b']))  