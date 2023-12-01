// Arrow functions allow us to write shorter function syntax:
// hello = () =>  "Hellow world";
// console.log(hello())
// In regular javascript function this returns the object
// In arrow function this returns the object of arrow


output = (x=99) => (x>50?`${x} is greater than 50`:`${x} is less than 50`);
console.log(output());
out = (val=88) => {
    return "this is output" + val;
}
console.log(out());


first = function() {
    return this;
}
console.log(first());
console.log("*************************************");
second = (a=33)=>{
    return this;
}
console.log(second());