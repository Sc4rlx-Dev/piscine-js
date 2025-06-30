function first(arrORstr){
    return arrORstr[0];
}

function last(arrORstr){
    let lastarr;
    lastarr = arrORstr.length - 1;
return arrORstr[lastarr]
}

function kiss(arrORstr){
        const fst_elenmt = arrORstr[0];
        const lst_element = arrORstr[arrORstr.length - 1];
        return [lst_element , fst_elenmt];
}
// console.log(kiss([1, 2, 3, 4, 5, 6]))