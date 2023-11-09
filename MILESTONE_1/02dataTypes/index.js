/*
In javascript there are 8 data types
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object --> should be(An object, An array, a date)
*/

// Numbers:
let length = 16;
let weight = 7.5;
console.log(`Length: ${length}, weight: ${weight})))Type ${typeof(length)}`);
// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(`color: ${color}, lastName: ${lastName})))Type ${typeof(color)}`);
// Booleans
var x = true;
var y = false;
console.log(`X: ${x}, Y: ${y})))Type ${typeof(x)}`);

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(`Person object's firstName: ${person.firstName} and lastName: ${person.lastName})))Type ${typeof(person)}`);
// Array object:
const cars = ["Saab", "Volvo", "BMW"];
cars.forEach(element => {
    console.log(element);
});
console.log(`Type: ${typeof(cars)}`);
// Date object:
const date = new Date("2022-03-25");
console.log(`Date: ${date})))Type: ${typeof(date)}`);

var x = 123e5;
console.log(x);
var xx;
console.log(`xx: ${xx}, type: ${typeof(xx)}`);


var x = 9;
var y = 9;
var z = 3;
console.log(x == y);                // true
console.log(x == z);                // false
