function reverse(arr){
    if (typeof arr === 'string') {
        let res = [];
        arr = arr.split('');
        for (let i = arr.length - 1; i >= 0; i--) {
            res.push(arr[i]);
        }
        let str = String(res)
        return str.replaceAll(',', '');
    }

    let res = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}

console.log(reverse('pouet'), 'teuop');
// const c = 'pouet'
// const cArray = c.split('');
// console.log(cArray.reverse())
// const array1 = ["one", "two", "three"];
// console.log([...array1].reverse())
// console.log(reverse(array1)) 
// console.log(reverse(["my","name","is","oussama"]))