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
        return v && v.length >= 5
    })
    return res3
}
// console.log(filter5Vowels(["asdv","sadf","dsggh","aeuioff","aeuioffoou"]));


function filter1DistinctVowel(arr4){
    const res4 = arr4.filter((d) => {
        let m = d.match(/[aeiou]/ig)
        if (!m){
            return false        
        }
    const res = new Set(m.map(vo => vo.toLowerCase()))
    return res.size === 1   
    })
return res4
}

// console.log(filter1DistinctVowel(["asdv","sadf","dsggh","aeuioff","aeuioffoou"]))


function multiFilter(arr5){
    const res5 = arr5.filter(m  => {
        const c = m.capital.length >= 8 
        const n = !/^[aeiou]/i.test(m.name)
        const t = /[aeiou]/i.test(m.tag)
        const r = m.region.toLowerCase() != "south"
    return c && n && t && r
    })
return res5
}


