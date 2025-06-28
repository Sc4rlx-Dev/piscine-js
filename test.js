// const words = ["spray", "elite", "exuberant", "destruction", "present"];


// function test(arr) {
//   let res
//   for (let i = 0 ; i < arr.length ; i++){
//     for(let j = 0; j < arr[i].length ; j++){
//       if(arr[i][j] == 's'){
//         res = arr[i]
//       }
//     }
//   }  
// return res
// }

// // console.log(test(["abc","def","ghs"]))
// const result = words.filter(test);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);


// const array1 = [1, 2, 3, 4]
// // 0 + 1 + 2 + 3 + 4
// const i = 0;
// const s = array1.reduce(
//   (a , c) => a + c

// )

// console.log(s)
// Expected output: 10



// function filter5Vowels(arr3){
//     function check(arr){
//         var f1 = false
//         var f2 = false
//         var f3 = false
//         var f4 = false
//         var f5 = false
//         for(let i = 0 ; i <= arr.length ;i++) {
//             for(let j = 0 ; j <= arr[i].length ; j++){
//                 if(arr[i][j] == 'a'){ f1 = true }
//                 if(arr[i][j] == 'e'){ f2 = true }
//                 if(arr[i][j] == 'i'){ f3 = true }
//                 if(arr[i][j] == 'o'){ f4 = true }
//                 if(arr[i][j] == 'u'){ f5 = true }
//             }
//         }
 
//     return false
//     }

//     const res3 = arr3.filter((w) => {
//         let res
//         for (let i = 0 ; i <= w.length ; i++){
//             if (check(w) == true){
//                 res.push(w[i])
//             } else (
//                 i++
//             )
//         }
//     return res
//     })
        
// return res3
// }









// console.log(new Date().toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"

// console.log(new Date().)


// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1.keys(0));

// function trimTemp(arr){

//     const res = arr.map( i => ({
//         city        : i.city , 
//         temperature : i.temperature.trim().replaceAll(' ', '') ,
//     }) )

// return res

// }


// console.log(
// trimTemp(
// [
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]) 
// )



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


// const isBelowThreshold = (currentValue) => currentValue <= 39;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // Expected output: true


// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // Expected output: true

// const array1 = ["a", "b", "c"];

// array1.forEach((element) => console.log(element));

// // Expected output: "a"
// // Expected output: "b"
// // Expected output: "c"



// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(sum);
// // Naively expected output: 14
// // Actual output: 0

