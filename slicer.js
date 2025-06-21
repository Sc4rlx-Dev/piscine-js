// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

function slice(arr, start, n) {
    if (typeof arr === 'string') {
        arr = arr.split('');
    }

    let end = n;
    if (end === undefined) {
        end = arr.length;
    }

    let newArr = [];

    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }

    if (arr) {
        return newArr;
    }
    return newArr;
}

// console.log(slice('abcdef', 2)); 
// console.log("Test :" ,  slice(["hello", "world","js","scarlx"] , 0 , 3));
