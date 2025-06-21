// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]


function slice(arr, start, n) {
    if (typeof arr === 'string') {
        arr = arr.split('');
    }

    let end = n || arr.length;
    let newArr = [];

    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }

    return arr ? newArr : newArr;
}

const animals = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(animals.slice(2));

// console.log(slice('abcdef', 2)); 
// console.log("Test :" ,  slice(["hello", "world","js","scarlx"] , 3));