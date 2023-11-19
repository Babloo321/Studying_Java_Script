/*
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
*/
/*
Converting Strings to Numbers
The global method Number() converts a variable (or a value) into a number.

A numeric string (like "3.14") converts to a number (like 3.14).

An empty string (like "") converts to 0.

A non numeric string (like "John") converts to NaN (Not a Number).
*/

console.log(`Number to string, like "33.2": ${typeof(Number("33.2"))}`);
console.log(`Number to string, like "": ${typeof(Number(""))}`);
console.log(`Number to string, like "John": ${typeof(Number("John"))}`);

