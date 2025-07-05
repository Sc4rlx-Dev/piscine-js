export const filterEntries = (obj, func) => {
    const res = {}
    Object.entries(obj).forEach(([k, v]) => {
        if (func([k, v])) {
            res[k] = v
        }
    })
    return res
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(filterEntries(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

export const mapEntries = (obj, func) => {
    const res = {}
    Object.entries(obj).forEach(([k, v]) => {
        const [newKey, newValue] = func([k, v])
        res[newKey] = newValue
    })
return res
}

export const reduceEntries = (obj, func, acc) => {
    const entries = Object.entries(obj)
    let res
    let ind

    if (acc !== undefined) {
        res = acc
        ind = 0
    } else {
        res = entries[0]
        ind = 1
    }
    for (let i = ind; i < entries.length; i++) {
        const entry = entries[i]
        res = func(res, entry)
    }
    return res
}

export const totalCalories = (ob) => {
    const al = reduceEntries(ob , (total , [itmname , grams]) => {
        const cal = nutritionDB[itmname].calories
        // console.log(cal)
        const itmcal = [cal * grams ] / 100
        // console.log(itmcal)
        return total + itmcal
    },0)
    return +al.toFixed(2)
}


// export const totalCalories = (ob) => {
//     const gramk = Object.keys(ob)
//     const gramv = Object.values(ob)

//     const data = filterEntries(nutritionDB, ([key]) => ob.hasOwnProperty(key))
//     const cal = mapEntries(data, ([key, value]) => [key, value.calories])
    
//     // console.log(gramk)
//     // console.log(gramv)
//     // console.log(data)
//     const calk = Object.keys(cal)
//     const calv = Object.values(cal)
//     let len = gramk.length
//     let i = 0
//     while(i < len){
//         console.log(gramk)
//         for(let j = 0 ; j <= i ; j++){
//             console.log(gramk[j])
//             // console.log(calk[j])
//         }
//         console.log(gramv)
//         // console.log(calv)
//         i++
//     }
// }

export const lowCarbs = (ob) => {
    const low = filterEntries( ob, ([key , grms]) => {
        const totlcarbs = (nutritionDB[key].carbs * grms / 100)
    return totlcarbs < 50
    })
return low    
}



export const cartTotal = (cart) => {
  return mapEntries(cart, ([name, grams]) => {
    const bname = nutritionDB[name]
    const m = grams / 100;

    const calcnut = mapEntries(
      bname,
      ([namenut, valn]) => {
        const calcvalue = valn * m
        // console.log(calcvalue)
        return [namenut, +calcvalue.toFixed(3)]
      }
    )
    return [name, calcnut]
  })
}

// small database with nutrition facts, per 100 grams
// prettier-ignore
const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))
console.log(totalCalories(groceriesCart), 1921.4)