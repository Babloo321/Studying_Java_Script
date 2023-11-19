/*
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

Method	    Description
*********   **************************************
new Map()	Creates a new Map
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	    Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map

Property	Description
size	    Returns the number of elements in a Map
***************************************************

How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
*/

let mymap = new Map([["apple", 100], ["orange", 200],["banana", 500]]);
mymap.set("grapes", "10kg");
let val = mymap.get("apple");
console.log(`value for apple: ${val}`);
mymap.forEach(element => {
    console.log(element);
});
console.log(`size of the mymap: ${mymap.size}`);
for(let x of mymap.entries())
{
    console.log(x);
}

var hasPro = mymap.has("mango");
console.log(`testing of has method: ${hasPro}`);