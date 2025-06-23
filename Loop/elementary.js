function multiply(a , b){
    let res = 0;

    while (b !== 0) {
        if (b < 0) {
            res -= a;
            b++;
        } else {
            res += a;
            b--;
        }
    }
    return res;
}

// console.log(multiply(123,-22))


function divide(c, d) {
    if (d === 0) {
        return 0;
    }
    let negative = (c < 0) !== (d < 0);
    c = Math.abs(c);
    d = Math.abs(d);
    let quotient = 0;
    while (c >= d) {
        c -= d;
        quotient++;
    }
    return negative ? -quotient : quotient;
}
// console.log(divide(0 , 0));


function modulo(e , f){
    if (f === 0) {
        return 0;
    }
    let result = Math.abs(e);
    let divisor = Math.abs(f);
    while (result >= divisor) {
        result -= divisor;
    }
    return e < 0 ? -result : result;
}
// console.log(modulo(5, 2));
