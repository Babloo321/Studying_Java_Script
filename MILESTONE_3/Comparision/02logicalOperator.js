/*  Logical Operators
Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	    Description	            Example
&&	            and	                    (x < 10 && y > 1) is true	
||	            or	                    (x == 5 || y == 5) is false	
!	            not	                    !(x == y) is true

****** Conditional (Ternary) Operator ******
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax
variablename = (condition) ? value1:value2 
*/

var age = 18;
let ans = (age <= 18) ? "Your are too young" : "You are old for this role";
console.log(ans);