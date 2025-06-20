// const is = {
//     num: (value) => { let res = !isNaN(value); return res },
//     nan: (value) => { let res = isNaN(value); return res },
//     str: (value) => { return typeof (value) === 'string' ? true : false; },
//     bool: (value) => { let res = typeof (value) === 'boolean'; return res },
//     undef: (value) => { let res = typeof (value) === 'undefined'; return res },
//     def: (value) => { let res = typeof (value) !== 'undefined'; return res },
//     arr: (value) => { let res = Array.isArray(value); return res },
//     obj: (value) => { let res = typeof (value) === 'object'; return res },
//     fun: (value) => { let res = typeof (value) === 'function'; return res },
//     truthy: (value) => { return (value === false || value == 0 || value == '' || value == null || is.undef(value) === true || is.nan(value) === true ); },
//     falsy : (value) => { return (!is.truthy(value))} ,
// };

// const is = {}
    is.num = (value) => { let res = !isNaN(value); return res };
    is.nan = (value) => { let res = isNaN(value); return res };
    is.str = (value) => { return typeof (value) === 'string' ? true : false; };
    is.bool = (value) => { let res = typeof (value) === 'boolean'; return res };
    is.undef = (value) => { let res = typeof (value) === 'undefined'; return res };
    is.def = (value) => { let res = typeof (value) !== 'undefined'; return res };
    is.arr = (value) => { let res = Array.isArray(value); return res };
    is.obj = (value) => { let res = typeof (value) === 'object'; return res };
    is.fun = (value) => { let res = typeof (value) === 'function'; return res };
    is.truthy = (value) => { return (value === false || value == 0 || value == '' || value == null || is.undef(value) === true || is.nan(value) === true ); };
    is.falsy = (value) => { return (!is.truthy(value)) };

// console.log(is.falsy(0));
