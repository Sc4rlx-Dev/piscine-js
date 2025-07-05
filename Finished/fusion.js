export const fusion = (target, source) => {
    const result = { ...target }

    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (Array.isArray(result[key]) && Array.isArray(source[key])) {
                result[key] = [...result[key], ...source[key]];
            } else if (
                typeof result[key] === 'object' && result[key] !== null && !Array.isArray(result[key]) &&
                typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])
            ) {
                result[key] = fusion(result[key], source[key]);
            } else if (typeof result[key] === 'number' && typeof source[key] === 'number') {
                result[key] = result[key] + source[key];
            } else if (typeof result[key] === 'string' && typeof source[key] === 'string') {
                result[key] = `${result[key]} ${source[key]}`;
            } else {
                result[key] = source[key];
            }
        }
    }

    return result;
}

// console.log(fusion({ arr: [1, 2 , 3] }, { arr: [4] }))

// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
// -> { arr: [ 1, '2', 2 ] }

// console.log(fusion({ str: "salem" }, { str: "alem" }))
// -> { str: 'salem alem' }

// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }))
// -> { a: 20, b: 10, c: 1 }

console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))// -> { a: 11, x: [], b: { c: 'Salem alem' } }

