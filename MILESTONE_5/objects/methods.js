/*
what is this?
In javascript this keyword refers to an object
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:

**************Important****************
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*****************************************************************************************

JavaScript Methods
JavaScript methods are actions that can be performed on objects.
A JavaScript method is a property containing a function definition.
accessing object's methods
object_name.method_name()
*****************************************************************************************
*/

const person = {
    firstName : "John",
    lastName : "Dewo",
    id : 222333,
    fullName : function() {
        return this.firstName + " " +  this.lastName
    }
}
// methods call
console.log(person.fullName());
// adding methods to the object
person.name = function(){
    return this.firstName.toUpperCase() + " " + this.lastName.toLowerCase();
}
console.log(`name: ${person.name()}`);
//using in-built methods with methods
console.log(person.fullName().toUpperCase());