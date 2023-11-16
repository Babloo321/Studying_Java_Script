/*
The For In Loop
The JavaScript for in statement loops through the properties of an Object:

used for iterating on object return key

For In Over Arrays
The JavaScript for in statement can also loop over the properties of an Array:

Array.forEach()
The forEach() method calls a function (a callback function) once for each array element.

*/
const person = {
    name : "Babloo",
    age : 24,
    education : "b-tech"
}
for(let key in person)
{
    console.log(`key: ${key} `);
    
    console.log(`person[key]: ${person[key]}`);
}
console.log(person.name);
console.log(person.age);
console.log(person.education);

console.log("used on array");
let person1 = ["babloo", 22, "Mahi", 32.3, {name:"babloo", name2: "Naina"}];
for(let key in person1)
{
    console.log(`Key: ${key}`);
    console.log(`Value: ${person1[key]}`);
}

console.log("used on for each on array");
person1.forEach((ele, index) => console.log(`${ele}, ${index}`));