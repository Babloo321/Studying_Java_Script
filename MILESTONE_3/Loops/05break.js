/*
JavaScript Break and Continue
The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.
*/


let text = "";
for(let i = 0; i < 10; i++)
{
    if(i === 3) {continue}
    else if(i == 7) {break}
    else 
    {text+= "Number is: " + (i+1) + "\n";}
}
console.log(text);