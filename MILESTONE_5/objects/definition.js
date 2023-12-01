/*
**object definition
**object property
**object methods

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

All JavaScript values, except primitives, are objects.


Objects are Variables
JavaScript variables can contain single values:
let person = "Mahi gupta";

JavaScript variables can also contain many values.

Objects are variables too. But objects can contain many values.

Object values are written as name : value pairs (name and value separated by a colon).

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

objects are mutable(that can change their values because it placed its refrences not their values)
like:
let x = person;
if we change in x it also changed in person
*/
// creating object with new key words
const person = new Object();
person.name = "Babloo";
person.age = 33;
console.log(person);
// creating objects with object literals
const person2 = {
    name : "Babloo",
    age : 33,
    address:{
        home : "Areraj Khajuriya",
        post : "Bahadurpur",
        police_station : "Govindganj",
        pincode : "845411"
    }
}
console.log(person2);