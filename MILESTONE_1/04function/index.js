// javascript function is a block of code used to perform a particular task when it is invoked.
// function for multiplication of two number;
// javascript function is defined with a function keyword, followed by name and followed by paranthesis()
// function name is same as which we declared variable in javascript
function multiplication()
{
    return 4 * 3;
}
var ans = multiplication();
console.log(ans);

function addition(a, b)
{
    return a + b;
}
var ans = addition(4,3);
console.log(`addition: ${ans}`);

function toCelecius(fahrenheit)
{
    return (5/9 )* (fahrenheit-32);
}
ans = toCelecius(77)
console.log(`The temperature is: ${ans} celcius`);
console.log("The temperature is " + toCelecius(77) + " celcius");
ans = "The temperatur is " + toCelecius(77) + " celcius";
console.log(ans);
