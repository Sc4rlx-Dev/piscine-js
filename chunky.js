function chunk(arr, n){
    
    let newarr = []
    for(let i = 0 ; i < arr.length ; i = i + n) {
        // console.log(i)
        const ch = arr.slice(i , i + n)
        newarr.push(ch)
    }
return newarr
}

console.log(chunk(["AAA","BBB","CCC", "DDD"] , 2));
