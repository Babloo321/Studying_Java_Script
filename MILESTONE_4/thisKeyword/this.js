/* What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

this in Event Handlers
In HTML event handlers, this refers to the HTML element that received the event:
*/

let obj = {
    firstName: "babloo",
    lastName : "Kumar",
    age : 24,
    fullname : function(){
        return this;
    }
}
console.log(obj.fullname());

// function myfun()
// {
//     return this;
// }
// console.log(myfun());

"use strict";
function fun()
{
    return this;
}
console.log(fun());