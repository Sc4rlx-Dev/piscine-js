function adder(arr , i = 0){
    const res = arr.reduce((n , a) => n + a , i)
return res
}

function isOdd(num) { return num % 2 !== 0 }

function sumOrMul(arr2 , n = 0){
    const res2 = arr2.reduce((ns, n) => {
        if (isOdd(n)) {
            return ns + n
        } else {
            return ns * n
        }
    }, n )
    return res2
}

function funcExec(arr3 , i = 0){
    const res3 = arr3.reduce((nb , cur) => cur(nb) , i)
return res3
}

