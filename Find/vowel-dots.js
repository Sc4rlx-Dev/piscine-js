
let vowels = /[aeiouAEIOU]/

function vowelDots(str) {
    let res = ""

    for (let char of str){
        res = res + char
        if (vowels.exec(char)) {
            res = res  + "."
          }
        }
return res
}


// console.log(vowelDots("something"));
