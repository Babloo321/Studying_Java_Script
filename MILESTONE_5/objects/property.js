/*
                ******JavaScript Properties******

Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.

Accessing JavaScript Properties
object.propertyname = person.name
objectName["property"] = person["name"]
objectName[expression] = x = 'name', objectname[x];

                ****JavaScript for...in Loop****
The JavaScript for...in statement loops through the properties of an object.

The block of code inside of the for...in loop will be executed once for each property.

Adding New Properties
person.nationality = "English";

Deleting Properties
The delete keyword deletes a property from an object:
delete person.name
*/
const person = {
    name : "babloo",
    age : 33,
    address : {     // nested objects
        home : "Areraj Khajuriya",
        post : "Bahadurpur",
        pincode : "845411"
    }
}
for(let key in person){
    console.log(`${key} => ${person[key]}`);
}
// adding property
person.salary = "23456";
for(let key in person){
    console.log(`${key} => ${person[key]}`);
}

// accessing netsted object's property
console.log(`nested object property: ${person.address.home}`);
for(let x in person.address)
{
    console.log(person.address[x]);
}
delete property
delete person.address;
for(let key in person){
    console.log(`${key} => ${person[key]}`);
}

// nested object and arrays
console.log("*******************nested object and arrays*******************");

const obje = {
    name : "Maxwell",
    age : 43,
    cars : [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
}
for(let i in obje.cars){
    console.log(obje.cars[i].name);
    for(let j in obje.cars[i].models){
        console.log(obje.cars[i].models[j]);
    }
}