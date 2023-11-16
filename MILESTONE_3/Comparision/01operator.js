/*JavaScript Comparison and Logical Operators
Comparison and Logical operators are used to test for true or false.
comparison operator
operator        description                                 Comparison      Returns
==	            equal to	                                x == 8	        false	

===	            equal value and equal type	                x === 5	        true	

!=	            not equal	                                x != 8	        true	
!==         	not equal value or not equal type	        x !== 5	        false	


>	            greater than	                            x > 8	        false	
<	            less than	                                x < 8	        true	
>=	            greater than or equal to	                x >= 8	        false	
<=	            less than or equal to	                    x <= 8	        true
*/

var x = 4;
var y = 4;
console.log(x==y);      // true
console.log(x===y);     // true

x = 33;
console.log(x != y)     // true
console.log(x !== y)     // true

console.log(x > y)       // true
console.log(x < y)       // false

console.log(x >= y)      // true
console.log(x <= y)      // false