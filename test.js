// console.log(new Date().toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"

// console.log(new Date().)


// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1.keys(0));

function trimTemp(arr){

    const res = arr.map( i => ({
        city        : i.city , 
        temperature : i.temperature.trim().replaceAll(' ', '') ,
    }) )

return res

}


console.log(
trimTemp(
[
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]) 
)



// console.log(fahrenheitToCelsius(['68', '32']));

// trimTemp(
// [
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]) /* -> [
//   { city: 'Los Angeles', temperature: '101°F' },
//   { city: 'San Francisco', temperature: '84°F' },
// ] */


// function trimTemp(arr3){
//   // let item = ({ city, temperature })
//     const result = arr3.map(item => ({ city: item.city, temperature: item.temperature.trim().replace(/\s+/g, '') }));
// return result
// }

// console.log(trimTemp(
//   [
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ]))


//       // console.log("test :",typeof(w))
//         if(t.includes(w) === false ){
//           res.push(t.trim())
//         }

//         if(t.includes(w)) {
//           // console.log(typeof(t[i]))
//           const cleaned = t.replaceAll(' ', '');
//           res.push(cleaned);
//           i++
//           res.push(t[i].trim())
//         }

//     return res.join('')
//     }
//   const trim = arr3.map(t)
// return trim




// const array1 = [1, 4, 9, 16]

// const cf = (v) => v + 1

// Pass a function to map
// const map1 = array1.map((test) => test * 2 );

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]
