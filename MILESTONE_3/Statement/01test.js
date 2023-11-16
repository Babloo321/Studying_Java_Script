/*  JavaScript if, else, and else if
            Use if to specify a block of code to be executed, if a specified condition is true
            Syntax::
                    if (condition) {
                      //  block of code to be executed if the condition is true
                    }
            Use else to specify a block of code to be executed, if the same condition is false
            Syntax::
                    if (condition) {
                      //  block of code to be executed if the condition is true
                    } else {
                      //  block of code to be executed if the condition is false
                    }
            Use else if to specify a new condition to test, if the first condition is false
            Syntax::
                    if (condition1) {
                      //  block of code to be executed if condition1 is true
                    } else if (condition2) {
                      //  block of code to be executed if the condition1 is false and condition2 is true
                    } else {
                      //  block of code to be executed if the condition1 is false and condition2 is false
                    }
            Use switch to specify many alternative blocks of code to be executed

*/


//************  if ************
var hour = 22;
let greeting;
if(hour < 18){
    greeting = "Have a good Day";
}
console.log(greeting);

// ************* else ***************
if(hour < 18){
    greeting = "Have a good day";
} else {
    greeting = "have a sweet dream";
}
console.log(`statement for if else block : ${greeting}`);

var date = new Date();
if(date.getHours() < 12)
{
    greeting = "Good morning";
} else if(date.getHours() >= 12 && date.getHours() < 18)
{
    greeting = "Good afterNoon";
}else {
    greeting = "Good Night";
}
console.log(greeting);