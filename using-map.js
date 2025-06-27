// citiesOnly([
//   {
//     city: 'Los Angeles',
//     temperature: '  101 °F   ',
//   },
//   {
//     city: 'San Francisco',
//     temperature: ' 84 ° F   ',
//   },
// ]) // -> ['Los Angeles', 'San Francisco']
function citiesOnly(arr) {
  return arr.map(item => item.city);
}

function upperCasingStates(arr){

const mapp = arr.map((t) => t[0].toUpperCase() + t.slice(1).toLowerCase());
return mapp
}

console.log(upperCasingStates(['alabama', 'new jersey']));

function fahrenheitToCelsius(arr2){
const degree = arr2.map((c) => (c - 32 )/ 1.8 )
return degree
}



function trimTemp(arr){
    const res = arr.map( i => ({
        city        : i.city , 
        temperature : i.temperature.trim().replaceAll(' ', '') ,
    }) )

return res

}

// console.log(
// trimTemp(
// [
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]) 
// )


function tempForecasts (arr4){
const res = arr4.map(i => ({
  city: upperCasingStates([i.city]),
  temperature: Math.round(fahrenheitToCelsius([parseInt(i.temperature)])) + '°Celsius',
  state: upperCasingStates([i.state]),
  region: i.region,
}));
return res.map(i => `${i.temperature} in ${i.city}, ${i.state}`);
}


// console.log(
//   tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ])
// ); // -> ['38°Celsius in Pasadena, California']