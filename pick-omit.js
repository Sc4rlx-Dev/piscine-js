export const pick = (obj, str) => {
    let newobj = {}
    if (typeof str !== 'string') {
        str = [str]
    }

    Object.entries(obj).forEach(([key, value]) => {
        if (str.includes(key)) {
            newobj[key] = value;
        }
    });
    return newobj
}

export const omit = (obj, str) => {
    let newobj = {};

    if (typeof str !== 'string') {
        str = [str]
    }

    Object.entries(obj).forEach(([key, value]) => {
        if (!str.includes(key)) {
            newobj[key] = value;
        }
    })
    return newobj
}



const obj = { a: 1, b: 2, c: 3 }
const str = 'a'

console.log(omit(obj, str))
