const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

const samePerson = person;
const clone1 = {...person};
const clone2 = {...person};




//Object.assign(samePerson, person)
Object.freeze(clone1.name)
Object.freeze(clone1.age)
Object.freeze(clone1.country)
Object.freeze(clone2.name)
Object.freeze(clone2.age)
Object.freeze(clone2.country)
Object.freeze(clone1)
Object.freeze(clone2)
//person.name = "oussama" ;
//console.log(person.name  , samePerson.name , clone1.name , clone2.name );
//slice.push(person,clone1,clone2)
//slice.forEhow to append ach(x =>  {
//	console.log("constent :" , x )
//})
//console.log("content :" , slice);


