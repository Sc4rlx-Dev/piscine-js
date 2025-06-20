// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
// }


function get(key){
    return sourceObject[key];
}

function set(k , v){
    sourceObject[k] = v;
    return get(k);
}

// constlog("test : ", set(num, 3));