const escapeStr = "\`\\\/\"\'";
const arr = [4, '2'];
const obj = {};
obj.str = "oussama";
obj.num = "2002";
obj.bool = true;
obj.undef = undefined;

console.log("first array " ,arr);
console.log("first struct :",obj);

const nested = { 
		arr : [4 , undefined , '2'],
		obj : {
				str : "this is only string",
				num : 404,
				bool : true,
		}
}

console.log("nested array : ", nested);

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);

console.log(nested);
console.log(arr);
console.log(obj);

