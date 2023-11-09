const PI = 3.14;
// PI = 44;            // CANT'WORK GETTING REFRENCE ERROR
// PI = PI * 2;        // CAN'T WORK GETTING REFRENCE ERROR
console.log(PI);       // it will be work fine

const cars = ["audi", "mahindra", 'toyto', 'suzuki'];
cars.map((car) => {
    console.log(car);
})
for(let i = 0; i < cars.length; i++)
{
    if(cars[i] != undefined)
    {
        cars[i] = (i+1 + ' ' + cars[i]);
    }else{
        cars[i] = 'new car : none' ;
    }
}
cars.map((car) => {console.log(car)});

const object = {
    name : "Babloo Kumar",
    address : {
        ward_no : "03",
        p_s : "Govindganj",
        dist : "East Champaran",
        pin : "845411"
    },
    phone : "8595636926",
    sayHi : () => {
        console.log(`Name : ${object.name}, Address: ${object.address.map((obj)=>{
            console.log(obj);
        })}, Phone No: ${object.phone}`);
    }
}
object.sayHi();
