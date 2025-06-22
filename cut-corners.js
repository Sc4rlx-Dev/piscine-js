function slicer(arr, start, n) {

    let temp = arr.length
    let newEnd = 0



    if (start < 0) {
        newEnd = temp - (-start) 
    } else if (n < 0) {
        n = temp -(-n)
    } 
    
    if ((start < 0) &&( n < 0)) {
        start = start * (-1)
        n = temp + n
        
    }

    if (start < 0 && n === undefined ) {
        start = newEnd
    }

    if (typeof arr === 'string') {
        let end = n || arr.length;
        let newStr = '';

        for (let i = start; i < end; i++) {
            newStr += arr[i];
        }

        return newStr;
    } else if (Array.isArray(arr)) {
        let end = n || arr.length;
        let newArr = [];

        for (let i = start; i < end; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
}




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
                    return (Number(slicer(n , 0 , point)))
                } else {
                flag = true
                 i++
                    if (typeof(n[i]) === 'string'){
                        let res = Number(slicer(n , 0 , point))
                        return res + 1
                    }
                }
            }
            if (found >= 5) {
                flag = true
                i++
                if (typeof(n[i]) === 'string'){
                    let res = Number(slicer(n , 0 , point))
                    return res + 1
                }
                //  return Number(n - ( found / 10)) + 1
            }
        }
    }
    if (flag == true) {
        // console.log(point)
        let _s = Number(slicer(n , 0 , point))
        // console.log(n)
        if(found >= 5 && Number(n) >= 0 ){
            return Number(slicer(n , 0 , point)) + 1
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
