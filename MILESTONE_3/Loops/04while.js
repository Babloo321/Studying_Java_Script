/*JavaScript While Loop
Loops can execute a block of code as long as a specified condition is true.

*/
var i = 0;
var text = "";
while(i < 10)
{
    text += "Number is: " + (i+1) + "\n";
    i++;
}
console.log(text);

/*  The Do While Loop
The do while loop is a variant of the while loop. This loop will execute the code block once, 
before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax
do {
  // code block to be executed
}
while (condition);
*/
console.log("**************do While*************");
var text1 = "";
var j = 0;
do{
    text1+= "Number is: " + (j+1) + "\n";
    j++;
}while(j < 4);
console.log(text);