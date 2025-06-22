function round(nbr){
    let found = 0
    let n = String(nbr) 
    flag = false
    let point = 0

    for (i = 0 ; i <= n.length ; i++) {
        if(n[i] == '.') {
            point = i
            i++
            found = n[i]
            if (n[i + 1] !== 'undifined'){ 
                if (found < 5) {
                    return (Number(n.slice(0 , point)))
                } else {
                flag = true
                 i++
                    if (typeof(n[i]) === 'string'){
                        let res = Number(n.slice(0,point))
                        return res + 1
                    }
                }
            }
            if (found >= 5) {
                flag = true
                i++
                if (typeof(n[i]) === 'string'){
                    let res = Number(n.slice(0,point))
                    return res + 1
                }
                //  return Number(n - ( found / 10)) + 1
            }
        }
    }
    if (flag == true) {
        // console.log(point)
        let _s = Number(n.slice(0 , point))
        // console.log(n)
        if(found >= 5 && Number(n) >= 0 ){
            return Number(n.slice(0 , point)) + 1
        }
        return _s - 1 

        // return Number(n - ( found / 10)) + 1
    }
}
// console.log((round(2.6)))
// console.log(Math.round(2.6))


// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log("my result : ",nums.map(round))
// console.log("expected :", nums.map(Math.round))






function ceil(nbr){


}
