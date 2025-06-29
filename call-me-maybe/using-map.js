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

function upperCasingStates(arr) {
  return arr.map(s => s.replace(/\b\w/g, char => char.toUpperCase()));
}

// console.log(upperCasingStates(['alabama', 'new jersey']));



function fahrenheitToCelsius(arr2){
  const degree = arr2.map((c) => { const t = parseFloat(c.replace('°F', '').trim())
    return Math.floor((t - 32) / 1.8) + '°C'
  })
  return degree
}

// console.log(
// fahrenheitToCelsius([' 101 °F']))



function trimTemp(arr){
    const res = arr.map( i => ({
        ...i ,
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


function tempForecasts (arr4){
const res = arr4.map(i => ({
  city: upperCasingStates([i.city]),
  temperature: fahrenheitToCelsius([i.temperature])[0].replaceAll('C' , 'Celsius'),
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