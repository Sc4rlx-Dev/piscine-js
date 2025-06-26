function isValid(datee){
    // console.log(typeof(datee))

    if(typeof(datee) === 'number'){
        return !isNaN(datee)
    }
    if(datee instanceof Date){
        return !isNaN(datee.getTime())
    }
return false
}

function isAfter(date1 , date2){
    if(Date.parse(date1) > Date.parse(date2) ){
        return true
    }
return false
}

function isBefore(date1 , date2){
    if(Date.parse(date1) < Date.parse(date2) ){
        return true
    }
return false
}

function isFuture(datee){
    let v = datee - new Date()
    if (v < 0) {
        return false
    }
return !isNaN(datee.getTime())
}

function isPast(datee){
    let v = datee - new Date()
    if (v > 0) {
        return false
    }
return !isNaN(datee.getTime())
}

// console.log(Date.now())
// console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))
console.log(isFuture(new Date(2077, 11, 31)))
console.log(isFuture(new Date('')))
// console.log(isValid(new Date(NaN)))
// var result = isFuture(new Date(2014, 11, 31))
// console.log(result)