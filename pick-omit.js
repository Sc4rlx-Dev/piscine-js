export const pick = (obj , str) => {
    let newobj = new Object()
    
    Object.entries(obj).forEach(([key,value]) => {
        if(key == str) {
            newobj[key]= value
        }
    })
return newobj
}


export const omit = () => {
let newobj = new Object()
    
    Object.entries(obj).forEach(([key,value]) => {
        if(key != str) {
            newobj[key]= value
        }
    })
return newobj
    
}



// const obj = { a: 1, b: 2, c: 3 }
// const str = 'a'

// console.log(omit(obj, str));
