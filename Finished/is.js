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

// const is = {};


// is.num = (value) => { let res = typeof value === 'number'; return res };
// is.nan = (value) => { let res = isNaN(value); return res };
// is.str = (value) => { return typeof (value) === 'string' ? true : false; };
// is.bool = (value) => { let res = typeof (value) === 'boolean'; return res };
// is.undef = (value) => { let res = typeof (value) === 'undefined'; return res };
// is.def = (value) => { let res = typeof (value) !== 'undefined'; return res };
// is.arr = (value) => { let res = Array.isArray(value); return res };
// is.obj = (value) => { let res = typeof (value) === 'object' && !Array.isArray(value) && value !== null; return res };
// is.fun = (value) => { let res = typeof (value) === 'function'; return res };
// is.truthy = (value) => { return !(value === false || value == 0 || value == '' || value == null || is.undef(value) === true || is.nan(value) === true); };
// is.falsy = (value) => { return !is.truthy(value); };


const is = {};

is.num = (value) => typeof value === 'number';
is.nan = (value) => Number.isNaN(value);
is.str = (value) => typeof value === 'string';
is.bool = (value) => typeof value === 'boolean';
is.undef = (value) => typeof value === 'undefined';
is.def = (value) => typeof value !== 'undefined';
is.arr = (value) => Array.isArray(value);
is.obj = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
is.fun = (value) => typeof value === 'function';
is.truthy = (value) => !!value;
is.falsy = (value) => !value;
// is.truthy = (value) => !(value === false || value == 0 || value == '' || value == null || is.undef(value) === true || is.nan(value) === true);
// is.falsy = (value) => !is.truthy(value);

console.log(is.truthy(false));
