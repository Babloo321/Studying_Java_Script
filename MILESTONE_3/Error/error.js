/* Throw, and Try...Catch...Finally
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.

The finally statement lets you execute code, after try and catch, regardless of the result:
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
*/

var intro = "";
try{
    if(intro.trim() == "") throw "Empty string";
    if(isNaN(intro)) throw "Not a Number";
}catch(err){
    console.log(`${intro} is ${err}`);
}

console.log("*********error handlying with finally***********");
let x = 44;
try{
    if(!isNaN(x)) throw `${x} is not a number`;
    if(isNaN(x)) throw `${x} is a number`;
    if(x > 10) throw `${x} is too big`;
    if(x < 10) throw `${x} is less than 10`;
}
catch(err){
    console.log(`Error thrown by try is: ${err}`);
}
finally{
    console.log(`hey your input value is ${x}`);
}
