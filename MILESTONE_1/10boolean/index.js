// A JavaScript Boolean represents one of two values: true or false.

// The Boolean() Function
// You can use the Boolean() function to find out if an expression (or a variable) is true:

console.log(Boolean(4>5));
console.log(Boolean(14>5)); // working fine
console.log(4>5);
console.log(14>5); // working fine

console.log(`boolean value of 0 is false: ${Boolean(0)}`);
console.log(`boolean value of -0 is false: ${Boolean(-0)}`);
console.log(`boolean value of "" is false: ${Boolean("")}`);
console.log(`boolean value of UNDEFINED is false: ${Boolean(undefined)}`);
console.log(`boolean value of NULL is false: ${Boolean(null)}`);
console.log(`boolean value of Nan is false: ${Boolean(NaN)}`);