const samePerson = person;
const clone1 = {...person};
const clone2 = {...person};

person.age = 78;
person.country = 'FR';


//Object.assign(samePerson, person)
Object.freeze(clone1.name)
Object.freeze(clone1.age)
Object.freeze(clone1.country)
Object.freeze(clone2.name)
Object.freeze(clone2.age)
Object.freeze(clone2.country)
Object.freeze(clone1)
Object.freeze(clone2)
