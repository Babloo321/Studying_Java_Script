/*
The For Of Loop
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
SYNTAX: 
for (variable of iterable) {
  // code block to be executed
}

variable - For every iteration the value of the next property is assigned to the variable. 
Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.
*/
// looping over array
console.log("looping over array")
let cars = ["audi", "suzuki", "desire", "ford"];
for(let i of cars)
{
    console.log(i);
}
// looping over string
console.log("looping over string");
let intro = "My name is Babloo Kumar, I have completed my graduation to Galgotias University";
for(let i of intro)
{
    console.log(i);
}
// looping over object
console.log("looping over object");
let newObj = {
    first : "firstValue",
    second: "secondValue",
    third : "thirdValue"
}