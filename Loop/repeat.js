function repeat(str,n){
    let count = 0
    let res = ""
    while(count < n){
        res = res + str
        // console.log("test")
        count++
    }
return res
}

console.log(repeat('a', 3));

// const str = "string "
// console.log(`this is an test of how many should be reapeted =>${str.repeat(2)}`);


// let count = 0 

// while (count < 3 ){
//     console.log(count)
//     count++
// }