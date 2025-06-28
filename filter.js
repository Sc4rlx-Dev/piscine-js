function filter(arr , fucn){
    let res  = []
    for (let i = 0; i < arr.length ; i++) {
        let ch = fucn(arr[i], i , arr)
        if (ch == true) {
            res.push(arr[i])
        }
    }
return res
}


function reject(arr, fucn){
    let res = []
    for(let i = 0 ; i < arr.length ; i++){
        let rej = fucn(arr[i], i , arr)
        if (rej == false) {
            res.push(arr[i])
        }       
    }
return res
}

function partition(arr, fucn){
    let res = filter(arr , fucn)
    let res2 = filter(arr , fucn)
return [res , res2]
}





// console.log(partition(["spray", "elite", "exuberant", "destruction", "present"], (word) => word.length > 6 ));

