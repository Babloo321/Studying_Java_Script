// const validateEngines = require("npm/lib/es6/validate-engines");

let arr = [1,2,4,"babloo", 32.3, {name: 'mahi'}];
console.log(arr);
// for(let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }
// console.log(arr.name);
console.log(`size of the array: ${arr.length}`);
console.log(arr.name);
arr.name = "mahi";
console.log(arr.name);
// The length property of an array returns the length of an array (the number of array elements).
console.log(`size of the array: ${arr.length}`);

const car = new Array("audi", "maruti", "desire", "volvo");
console.log(car);
car[0] = "mahindra";
console.log(car);

var fruit = ['banana', 'apple', 'mango', 'orange', 'pineapple'];
var arrayToString = fruit.toString();
console.log(fruit);
console.log(arrayToString);
console.log(`type of array is: ${typeof(fruit)}`);


// array can hold different types of variables, functions, objects and another array
// sort methods in array can sort the array
var myArray = [33,2,4,99,3,1,11];
console.log(myArray.sort());

var fruit = ['banana', 'apple', 'mango', 'orange', 'pineapple'];
// let text = "<ul>";
// for(let i = 0; i < fruit.length; i++){
//     text+= "<li>" + fruit[i] + "</li>";
// }
// text+="</ul>";
// console.log(text);
// adding an element into the array using push()
console.log(`length of the fruit array ${fruit.length}`);
fruit.push("kela");
console.log(fruit);
console.log(`length of the fruit array ${fruit.length}`);
// fruit.forEach(ele=> {        // correct
//     console.log(ele);
// })

fruit.forEach(ele => console.log(ele));         // correct

// fruit.forEach((ele)=> {         // correct
//     console.log(ele);
// })

const person = [];
person["firstName"] = "Babloo";
person["lastName"] = "Kumar";
person['age'] = 23;
console.log(person.length);
console.log(person);
console.log(person.firstName);

/*
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.
*/

/*
How to Recognize an Array
A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator typeof returns "object":

*/
var names = ["aadi", "naina", 'mahi','mitali'];
console.log(typeof(names));
console.log((Array.isArray(names)));