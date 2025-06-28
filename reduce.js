function fold(arr, fucn , id){
    let res = id
    for(let i = 0 ; i < arr.length ; i++){
        res = fucn(arr[i] , i , arr)
    }
return res
}

function foldRight(arr, fucn , id){
    let res = id
    for(let i = arr.length - 1 ; i >= 0 ; i--){
        res = fucn(arr[i] , i , arr)
    }
return res
}

function reduce(arr , func){
    if (arr.length < 1) {
        console.log("Error")
    }
    let res = arr[0]
    for (let i = 0 ; i <= arr.length ; i++){
        res = func(arr[i], i , arr)
    }
return res
}


function reduceRight(arr , func){
    if (arr.length < 1) {
        console.log("Error")
    }
    let res = [arr.length - 1] 

    for (let i = arr.length - 1 ; i >= 0 ; i++){
        res = func(arr[i], i , arr)        
    }   
return res
}
