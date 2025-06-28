function fold(arr, fucn , id){
    let res = id
    for(let i = 0 ; i < arr.length ; i++){
        res = fucn(res , arr[i])
    }
return res
}

function foldRight(arr, fucn , id){
    let res = id
    for(let i = arr.length - 1 ; i >= 0 ; i--){
        res = fucn(res , arr[i])
    }
return res
}

function reduce(arr , func){
    if (arr.length < 1) {
        console.log("Error")
    }
    let res = arr[0]
    for (let i = 1 ; i < arr.length ; i++){
        res = func(res , arr[i])
    }
return res
}

function reduceRight(arr , func){
    if (arr.length < 1) {
        console.log("Error")
    }
    let res = arr[arr.length - 1] 

    for (let i = arr.length - 2 ; i >= 0 ; i--){
        res = func(res , arr[i])        
    }   
return res
}




console.log(reduceRight([1,2,3] ,  (accumulator, currentValue) => accumulator + currentValue))
