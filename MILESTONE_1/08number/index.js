/*
    Javascript numbers are always 64bits a floating point

    NaN-> Not a Number : it is reserved in javascript indicating that no is not a legal number
    trying to do arithimatic with non-numeric string getting NaN
    NaN is a number if find typeof(NaN): number
    Infinity : Infinity is value in javascript if you calculate a number outsite the possible number
    Infinity is a number if find typeof(Infinity): number
    Divide by 0 also gives infinity

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

javascript numbers are object if we defined with new keyword

comparing two javascripts object always return false
*/

var x = 33;
console.log(x);
x = 33.33;
console.log(x);
x = 11.11+22.22;
console.log(x);

// adding number and string;
x = 33;
var y = "Hello";
console.log(x+y);
x =  "Hello";
y = 33;
console.log(x+y);
x = 11;
y = 22;
var z = "Babloo";
console.log(x+y+z); // first perform arithmetic on strting integer value when getting string it convert all in string
console.log(z+y+x); // converted all as string

x = 10;
y = "Apple";
console.log(x/y);       // it gives NaN
y = "2";
console.log(x/y);       // it gives output
console.log(typeof(NaN));

// Infinity
var myNumber = 2;
while(myNumber!=Infinity){
    myNumber*=myNumber;
}
console.log(myNumber);

var myNumber = 32;
console.log(myNumber.toString(32));
console.log(typeof(myNumber.toString(32)));
console.log(myNumber.toString(16));
console.log(myNumber.toString(16));
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));

let a = 33;
let b = new Number(22);
console.log(`a: ${a} and b: ${b}`);

console.log(`checking equality of a ${a} and b ${b} is ${a == b}`);