// javascript array methods
/*
        Array length      :: it return the size of the array       
        Array toString()  :: it convert array into string (comma seperated)   
        Array pop()       :: it remove the last element of the array
        Array push()      :: it add the an element into the array at the last index
        Array shift()     :: it remove an element into the array at the first index   
        Array unshift()   :: it add the an element into the array at the first index
        Array join()      :: it join all elements into a string
        Array delete()    :: it delete the array with undefined
        Array concat()    :: Merging two or more than two use concat() or + operator, it return a new array
        Array flat()      :: it is method to reduce the dimensionality of an array, return a new array
        Array splice()    :: it add new items to array
        Array slice()     :: it slice out a piece of an array

*/
/*
var fruits = ["Banana", "Mango", "Apple", "Orange"];
console.log(`fruits arary: ${fruits}`);
console.log(`lenght: ${fruits.length}`);
console.log(`conveted into a single string ${fruits.toString()}`);
fruits.pop();
console.log(`after the pop() methods called fruits : ${fruits}`);
console.log(`lenght: ${fruits.length}`);
fruits.push("PineApple");
console.log(`after the push("Pineapple) methods fruits: ${fruits}`);
fruits.shift();
console.log(`after the shift() methods fruits: ${fruits}`);
fruits.unshift("Grapes");
console.log(`after the unShift("Grapes") methods fruits: ${fruits}`);
console.log(fruits.join(" Babloo "));
console.log(`using join methods into the fruits is: ${fruits}`);
fruits.delete();
console.log(fruits);
*/

// CONCATINATION--> MERGING--> ADDING
var arr1 = ["name", "age", 'education'];
var arr2 = ['babloo', 24, 'b-tech'];
var arr3 = ['naina', 23, 'medical'];
var out = arr1.concat(arr2, arr3);
console.log(out);


// uses of flat()

let myarr = [[1,2], [3,4], [11,22]];
let newarr = myarr.flat();
console.log(newarr);

// splice and slice
var fruits = ["Banana", "Mango", "Apple"];
console.log(fruits);
var ans = fruits.splice(1, 0, "Myname", "Babloo");
console.log(ans);

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruit);
const citrus = fruit.slice(2);
console.log(citrus);