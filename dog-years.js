const Plannets = {
    mercury :   0.2408467,
    venus   :   0.61519726,
    mars    :   1.8808158,
    earth   :   31557600,
    jupiter :   11.862615,
    saturn  :   29.447498,
    uranus  :   84.016846,
    neptune :   164.79132,
}

function dogYears(p , a) {
    // const n = (a / Plannets.earth) * 7
    return (parseFloat(((a / Plannets.earth) * 7/ Plannets[p]).toFixed(2)))
}
console.log(dogYears('mercury', 2134835688))

//toFixed() , parsInt()