// arithmetic operator
var a = 5, b = 33;
console.log(`${a} + ${b} = ${a+b}`);
console.log(`${b} - ${a} = ${b-a}`);
console.log(`${a} * ${b} = ${a*b}`);
console.log(`${b} / ${a} = ${b/a}`);    // get real value
console.log(`${b} % ${a} = ${b%a}`);    // modulo getting reminder

// operator
console.log(`Exponential of ${a} : ${a**a}`);       // exponential operator
console.log(`Increment operator used of ${a} Incremented value: ${++a}`);
console.log(`Decrement operator used of ${a} Decremented value: ${--a}`);


// Assignment Operators

aa = 55, bb = 33;                          // here using assignment operator
console.log(`a: ${aa} and b: ${bb}`);     
var aa, bb;                                // hoisting is used

// additional assignment operator (+=)
// all arithmentic operator perform together with assignment operator
console.log(` += apply on ${a}, add ${b} more into ${a} output: ${a+=b}`);

var x = 44;
var y = "5 " + x;
var z = y + " wow";
console.log(`x's Result: ${x}\ny's Result: ${y}\nz's Result: ${z}`);


// JS type operator
var name = "Babloo";
console.log(`Name: ${name}, and their type: ${typeof(name)}`);
var name = {
    fname: "Babloo",
    lname: "kumar"
}


console.log(5 + 10);

var x = 3, y = 2;
console.log(`X: ${x}, and Y: ${y}\nUses of exponential operator ${x**y}\nUses of math.pow(arg1, arg2) : ${Math.pow(x,y)}`);


