function filterShortStateName(arr){
    const res = arr.filter((less) => less.length < 7)
return res
}

function filterStartVowel(arr2){
    const res2 = arr2.filter((f) => f.match(/^[aeiou]/i))
return res2
}

function filter5Vowels(arr3){
    const res3 = arr3.filter((w) => {
        let v = w.match(/[aeiou]/ig)
        return v && new Set(v).size >= 5
    })
    return res3
}
// console.log(filter5Vowels(["asdv","sadf","dsggh","aeuioff","aeuioffoou"]));


function filter1DistinctVowel(arr4){
    const res4 = arr4.filter((d) => {
        let m = d.match(/[aeiou]/ig)
    return m && new Set(m).size === 1   
    })
return res4
}

function multiFilter(arr5){
    const res5 = arr5.filter(m => ({
        capital : m.capital >= 8 ,
        name :    !filterStartVowel([m.name]),
        tag :     [m.tag].match(/[aeiou]/g),
        region :   m.region !== 'south',
    }))
return res5
}


