
export const filterValues = (obj, func) => {
  const res = {}
  for (const [key, v] of Object.entries(obj)) {
    if (func(v)) {
      res[key] = v
    }
  }
  return res
}


export const mapValues = (obj2 , func) => {
    const res = {}
    for(const [k, v] of Object.entries(obj2)){
        // console.log(k)
        // console.log(v)
        res[k] = func(v)
    }
return res
}

export const reduceValues = (obj3 , func) => {
    let res = 0
    for(const [, v] of Object.entries(obj3)){
        res = func(res ,v ) 
    }
return res
}


// console.log(Object.entries(nutrients).filter(([k, v]) => v <= 12))
// console.log(Object.entries(nutrients).map(([k, v]) => v + 1))
// console.log(Object.entries(nutrients).reduce((a, [k, v]) => a + v, 0))



// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

// console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37


// small database with nutrition facts, per 100 grams
// In this exercise this is used for testing purposes only
// prettier-ignore
