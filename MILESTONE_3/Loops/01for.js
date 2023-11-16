/*  Loops can execute a block of code a number of times.
    use for iterating on the array element

            ****JavaScript supports different kinds of loops:***
            ****Different Kinds of Loops***

                for - loops through a block of code a number of times
                for/in - loops through the properties of an object
                for/of - loops through the values of an iterable object
                while - loops through a block of code while a specified condition is true
                do/while - also loops through a block of code while a specified condition is true

*/
var cars = ["audi", "nexon", "desire", 'swift', "thunder"];
for(let i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}
console.log("****************************************")
// scope of for loop with var and let data type;
var i = 4;
console.log(i);
console.log("****************************************")
for(var i = 0; i < 10; i++)
{
    console.log(i+1);
}
console.log("****************************************")
console.log(i);
console.log("****************************************")
console.log("****************************************")

let j = 5;
console.log(j);
console.log("****************************************")
for(let j = 0; j < 10; j++)
{
    console.log(j+1);
}
console.log("****************************************")
console.log(j);