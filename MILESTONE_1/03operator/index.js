let fullname = "Babloo Kumar";
function para() {
    document.getElementById("paragraph1").innerHTML = fullname;
}

let x = 33;
{
    let x = 55;
    console.log(`value of x inside the block is: ${x}`);// getting x = 55;
}
console.log(`value of x outside the box is: ${x}`);     // getting x = 33;