function isValid(datee){
    if((datee instanceof Date )&& !isNaN(datee) ){
        return true
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


// console.log(isValid(new Date('foo')))
// var result = isFuture(new Date(2014, 11, 31))
// console.log(result)