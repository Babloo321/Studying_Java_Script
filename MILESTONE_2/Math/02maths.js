// Math.sign()
// Math.sign(x) returns if x is negative, null or positive:

console.log(`uses of Math.sign() for -4: ${Math.sign(-4)}`);        // return -1
console.log(`uses of Math.sign() for 0: ${Math.sign(0)}`);          // return 0
console.log(`uses of Math.sign() for 2: ${Math.sign(2)}`);          // return 1

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:
console.log(`3 to the power 4 value is: ${Math.pow(3,4)}`);

// Math.sqrt() 
// Math.sqrt(x) returns the square root of x:
console.log(`square root of 64 is: ${Math.sqrt(64)}`);

// Math.abs() it converted negative into positive only
// Math.abs(x) returns the absolute (positive) value of x:
console.log(`use of abs() for -4.3 is: ${Math.abs(-4.3)}`);
console.log(`use of abs() for 4.3 is: ${Math.abs(4.3)}`);
console.log(`use of abs() for 4 is: ${Math.abs(4)}`);

console.log(Math.min(1,3,2,55,-2, -55, 0));
console.log(Math.max(1,3,2,55,-2, -55, 0));
// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

console.log(`uses of random : ${Math.random()}`);


console.log("**************************************");
console.log(`a random number between 0 to 9 is: ${Math.random() * 10}`);
console.log(`a random integer between 0 to 10 is: ${Math.random() *11}`);
console.log(`a random number between 0 to 100 is: ${Math.floor(Math.random() *101)}`);