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
        return [fst_elenmt , lst_element];
}
// console.log(last([2, 42]))