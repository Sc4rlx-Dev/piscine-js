function sign(n){
    if (n == 0) { return 0}

    if (n > 0) {
        return 1
    } else {
        return -1
    }

}

function sameSign(a , b){
    if (sign(a) == sign(b)) {
        return true
    } else {
        return false
    }
}

// console.log(sameSign(3,-2));
