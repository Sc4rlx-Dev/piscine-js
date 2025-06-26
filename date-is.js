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
    return Date.parse(date1) > Date.parse(date2) 
}
function isBefore(date1 , date2){
    if(Date.parse(date1) < Date.parse(date2) ){
        return true
    }
return false
}

function isFuture(datee){
    if (isValid(datee) && isAfter(datee , Date.now()))   {
        return true
    }
return false
}

function isPast(datee){
    if(isValid(datee) && isBefore(datee , Date.now() )){
        return true
    }
return false
}

// console.log(Date.now())
console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))
// console.log(isValid(new Date(NaN)))
// var result = isFuture(new Date(2014, 11, 31))
// console.log(result)