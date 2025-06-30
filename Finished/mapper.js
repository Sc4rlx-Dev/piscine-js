function map(arr , fucn){
    let res = []
    for(let i = 0 ; i < arr.length ; i++){ 
        res.push(fucn(arr[i] , i , arr ))
    }
return res
}

function flatMap(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        const m = func(arr[i], i , arr)
        if(Array.isArray(m)){
           res.push(...m)
        }else{
            res.push(m)
        }
    }
    return res;
}

// console.log(
//     flatMap([1, 2, 3], (num) => (num === 2 ? [2, 10] : num))
// )
// console.log(map([1, 4, 9, 16], (item) => item * 2))


