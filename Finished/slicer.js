// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]


function slice(arr, start, n) {

    let temp = arr.length
    let newEnd = 0



    if (start < 0) {
        newEnd = temp - (-start) 
    } else if (n < 0) {
        n = temp -(-n)
    } 
    
    if ((start < 0) &&( n < 0)) {
        start = start * (-1)
        n = temp + n
        
    }

    if (start < 0 && n === undefined ) {
        start = newEnd
    }
// console.log(n)
// console.log(start)
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


console.log(slice('abcdef', -3, -1)); 
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f'], 2)); 
// console.log(slice(["hello", "world", "js", "scarlx"], 3)); 