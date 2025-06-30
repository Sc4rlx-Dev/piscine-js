function firstDayWeek( number , w){

    let neww = new Date(w) 
    // console.log(w);
    // console.log(neww);
    neww.setDate(number + 30)
    // console.log(neww);

    const r = /\d{4}-(\d{2}-\d{2})/;
    const match = neww.toISOString().match(r)
    // if (match) {
    //     console.log(match[1]);

    // }
    
return match[1] +"-"+ w 
}
console.log(firstDayWeek(52, '1000'))
