function split(str, c) {
    let arr = []
    let strArr = ""
    let del = c.length
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + del) === c) {
            arr.push(strArr)
            strArr = ""
            i += del - 1
        } else {
            strArr += str[i]
        }
    }
    arr.push(strArr)
    return arr
}

// str = "ggg - ddd - b"
// console.log(split('ggg - ddd - b', ' - '));
// console.log(str.split(' - '))

// console.log(str.split('\t'))
// console.log( split(str , '\t'));


function join(arr , c){
    let res = ""
    for (let i = 0 ; i < arr.length ; i++ ){
        res = res + String(arr[i])
        if (c === undefined){
            c = ','
        }
        if (c != "" && c !== undefined && i != arr.length - 1) {
            res = res + String(c)
        }
    }
return res
}

// console.log(join(str));
// const str = ["this" ,"is" ,"not" ,"wrong"]
// const elements = ["Fire", "Air", "Water"]
// console.log(elements.join(" "))
// console.log(str.join(" "))

// const str = ["this" ,"is" ,"not" ,"wrong"]

// console.log(join(["this" ,"is" ,"not" ,"wrong"] ,))
// console.log(str.join())
