function cutFirst(str){
    return str.slice(2) 
}

function cutLast(str){
    return str.slice(0,-2)
}

// console.log(cutLast("oussama"));

function cutFirstLast(str) {
    let cut = cutFirst(str)
    cut = cutLast(cut)
return cut
}

function keepFirst(str){
    let res = str.slice(0,2)
return res
}
// console.log(keepFirst("ABsdsdsd"))

function keepLast(str){
    return str.slice(str.length - 2 , str.length)
}

// console.log(keepLast("asnnnnnLL"))

function keepFirstLast(str)
{
    let res = ""

    res = keepFirst(str)
    res = res + keepLast(str)
    // let cut = keepFirst(str)   
    // console.log(cut)

return res
}
// console.log(keepFirstLast("ABsasasCD"));

// console.log(keepFirst("OOasasas"));

