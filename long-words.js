function longWords(arr) {
    return arr.every((e) => e.length >= 5 )
}

function oneLongWord(arr){
    return arr.some((e) => e.length >= 10)
}

function noLongWords(arr){
    const r = arr.some((e) => e.length >= 7 )
    if (r == true) {return false}
return true
}
// console.log(noLongWords(["ape", "ban", "oe"]))
