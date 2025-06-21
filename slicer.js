// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]


function slice(arr, start, n) {
    let temp = arr.length
    if (start < 0) {
        start = temp - (- start) 
            // console.log(start) 
    }


    if (typeof arr === 'string') {
        let end = n || arr.length;
        let newStr = '';

        for (let i = start; i < end; i++) {
            newStr += arr[i];
        }

        return newStr;
    } else if (Array.isArray(arr)) {
        let end = n || arr.length;
        let newArr = [];

        for (let i = start; i < end; i++) {
            newArr.push(arr[i]);
        }

        return newArr;
    }
}


console.log(slice('abcdef', -2)); 
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f'], 2)); 
// console.log(slice(["hello", "world", "js", "scarlx"], 3)); 