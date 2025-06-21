function multiply(a , b){
    let result = 0, isNegative = false;
    if (b < 0) { isNegative = true; b = -b; }
    for (let i = 0; i < b; i++) { result += a; }
    return isNegative ? -result : result;
}


// console.log(multiply(123,-22))


function divide(c, d) {
    c = Math.abs(c);
    let quotient = 0;
    while (c >= d) {
        c -= d;
        quotient++;
    }
    return quotient;
}   
// console.log(divide(5 , 9));


function modulo(e , f){
    let result = e;
    while (result >= f) {
        result -= f;
    }
    return result;
}
// console.log(modulo(5, 2));
