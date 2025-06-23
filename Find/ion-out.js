function ionOut(str) {
    let rx = /\b[a-zA-Z]+t(?!=ion)/g
    let ch = rx.exec(str)
    let arr = []
    while (ch != null) {
        arr.push(ch[0])
        ch = rx.exec(str)
    }
    return arr
}

// console.log(ionOut('1st position is the vision of the 2nd position'));
