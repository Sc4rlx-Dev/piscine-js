function filterShortStateName(arr){
    const res = arr.filter((less) => less.length < 7)
return res
}

// const words = ["spray", "elite", "exuberant", "destruction", "present", "abc"]
// console.log(filterShortStateName(words))


//  a, e, i, o, u


function filterStartVowel(arr2){
    const res2 = arr2.filter((f) => f.match(/^[aeiou]/g))
return res2
}

// console.log(filterStartVowel(words))

function filter5Vowels(arr3){
    const res3 = arr3.filter((w) => {
        let v = w.match(/[aeiou]/g)
        return v && new Set(v).size === 5
    })
    return res3
}

function filter1DistinctVowel(arr4){
    const res4 = arr4.filter((d) => {
        let m = d.match(/[aeiou]/g)
    return m && new Set(m).size === 1   
    })
return res4
}

function multiFilter(arr5){
    const res5 = arr5.filter(m => ({
        capital : m.capital >= 8 ,
        name :    !filterStartVowel([m.name]),
        tag :     [m.tag].match(/[aeiou]/g),
        region :   m.region != "south",
    }))
return res5
}


// console.log(filter1DistinctVowel(["abc","efg","hgs","abb","abbebbibbobbubb"]))


