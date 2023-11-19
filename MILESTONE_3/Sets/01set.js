/*
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.

            *****************Essential Set Methods****************
            Method	Description
            new Set()	Creates a new Set
            add()	Adds a new element to the Set
            delete()	Removes an element from a Set
            has()	Returns true if a value exists in the Set
            forEach()	Invokes a callback for each element in the Set
            values()	Returns an iterator with all the values in a Set
            Property	Description
            size	Returns the number of elements in a Set

            How to Create a Set
You can create a JavaScript Set by:

Passing an Array to new Set()
Create a new Set and use add() to add values
Create a new Set and use add() to add variables
*/
let set1 = new Set(["a", 'b', 'c', 'd']);
set1.add("e");
set1.add("f");
//The forEach() Method
//The forEach() method invokes (calls) a function for each Set element:
set1.forEach((ele)=>console.log(ele));

let set = new Set();
set.add("Babloo");
set.add("Mahi");
set.add("Apple");
set.add("Orange");
set.forEach((val) => console.log(val));


// The forEach() Method
// The forEach() method invokes (calls) a function for each Set element:
for(let key of set.values())
{
    console.log(key);
}
  
let text = "";
for(let x of set1.values())
{
    console.log(x);
    text+=x;
}

console.log(`this is output for the text: ${text}`);