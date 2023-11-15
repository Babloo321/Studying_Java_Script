/*let mini = Number.MIN_SAFE_INTEGER;
let maxi = Number.MAX_SAFE_INTEGER;
console.log(`Minimum integer value is js: ${mini}\nMaximum integer value in js: +${maxi}`);
*/

/*                                   JavaScript Array forEach()
 The forEach() method calls a function (a callback function) once for each array element.
 */
var value = [2,3,4,22,31,23,43,16,21,52,10];
value.forEach((ele)=> {
    console.log(ele);
})

/*                                   JavaScript Array map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.
*/
console.log(`Executing map`);
// var output = value.map(myfun);
// function myfun(val){
//     return val * 2;
// }
// console.log(output);
var output = value.map((val) => {return val});
console.log(output);

// uses of  flateMap()
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr);

// JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

var array = [32,43,1,2,3,65,23,3,8];
console.log(array);
var ans = array.filter((val)=> {
    return val > 23;
})
console.log(ans);

/*                      JavaScript Array reduce()
        The reduce() method runs a function on each array element to produce (reduce it to) a single value.

        The reduce() method works from left-to-right in the array. See also reduceRight().

        The reduce() method does not reduce the original array.
*/
var array = [32,43,1,2,3,65,23,3,8];
ans = array.reduce((accu, item, index, array) => {
    console.log(`accumelator ${accu}\ncurr item: ${item}\ncurr index ${index}\ncurr array ${array}`);
    return accu+item;
}, 0);
console.log(ans);

ans = array.reduceRight((acc, item) => {
    console.log(`accumelator: ${acc}\n curr item ${item}`);
    return acc+item;
},0);
console.log(ans);

console.log("executing find is same as filter but find return a single value which is first match");
console.log(array);
ans = array.find(val => val > 23);
console.log(ans);

console.log(`executing indexOf()`)
var fruits = ["Apple", "Banana", "Mango", "Orange"];
let pos = fruits.indexOf("Mango");
console.log(pos);

// JavaScript Array Keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.
var fruits = ["Apple", "Banana", "Mango", "Orange"];
let key = fruits.keys();
for(let x of key){
    console.log(fruits[x]);
}

var fruits = ["Apple", "Banana", "Mango", "Orange"];
let keys = fruits.entries();
for(let k of keys){
    console.log(k);
}

// includes function return the true if present otherwise false
var fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.includes("Apple"));
