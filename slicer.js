// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]



function slice(arr , start , n) {
    
    let end = n || arr.length ;
    let flag = false

    if (end != arr.length) {
        flag = true
    }

    for (let i = 0 ; i < arr.length ; i++) {
        if (i === start) {
            if (flag === true) {
                let newArr = [];
                for(let j = start ; j < end ; j++) {
                    newArr.push(arr[j]);
                }
                return newArr
            }
            return arr[i]
        }
    }
}


// console.log("Test :" ,  slice(["hello", "world","js","scarlx"] , 0 , 3));
