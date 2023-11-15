// The sort() method sorts an array alphabetically:   By default, the sort() function sorts values as strings.
var fruits = ['banana', 'apple', 'mango'];
fruits.sort();
console.log(fruits);

const points = [40, 100, 1, 5, 25, 10];
// points.sort();
// points.reverse();
points.sort(function(a,b){
    return a-b;
})
console.log(points);

// reverse() method reverse the array element
var fruits = ['banana', 'apple', 'mango'];
fruits.reverse();
console.log(fruits);

// finding max and min value into the array
var arr = [2,3,22,66,32,345,23,121];
arr.sort(function(a, b){
    return a - b;
})
console.log(arr[arr.length-1]);
arr.reverse();
console.log(arr);

// sort randomally
var arr = [2,3,22,66,32,345,23,121];
arr.sort(function(){
    return 0.5 - Math.random();
})
console.log(arr);

var point = [40, 100, 1, 5, 25, 10];

for (let i = point.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = point[i];
  point[i] = point[j];
  point[j] = k;
}
console.log(point);

var maxi = function myArray(){
    return Math.min(22,33,1,3,22,43);
}

console.log(maxi());

var point = [40, 100, 1, 5, 25, 10];
let max = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < point.length; i++){
    if(point[i] > max) max = point[i];
}
console.log(max);

const cars = [
    {type : "volvo", year: 2020},
    {type : "audi", year: 2016},
    {type : "mahindra", year: 2012},
    {type : "desire", year: 2028}
]
cars.sort(function(a, b) {
    return a.year - b.year;
})
console.log(cars);