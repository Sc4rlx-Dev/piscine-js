function addWeek(date){
    let days = {
        0  : 'Monday',
        1  : 'Tuesday',
        2  : 'Wednesday',
        3  : 'Thursday',
        4  : 'Friday',
        5  : 'Saturday',
        6  : 'Sunday',
        7  : 'secondMonday',
        8  : 'secondTuesday',
        9  : 'secondWednesday',
        10 : 'secondThursday',
        11 : 'secondFriday',
        12 : 'secondSaturday',
        13 : 'secondSunday',
    };
    let change = date
    let def =  (Date.parse(change) - 978307180000 ) / 86400000 
    if (def > 13) {
        def = def % 14
    }
return days[def]
} 

function timeTravel({ date, hour, minute, second }) {
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    return date;
}


// console.log(addWeek(new Date('0001-01-01')) === 'Monday')
//console.log(addWeek(new Date('0001-01-01')))
// console.log(timeTravel({
//   date: new Date('2020-05-29 23:25:22'),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString());






// console.log(addWeek(new Date("0001-01-03")))


// console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
// console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
// console.log(addWeek(new Date('0001-01-07'))) // Output: Sunday
// console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
// console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday