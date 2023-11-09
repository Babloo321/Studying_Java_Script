/*******************************************Real Life Object, Properties and Methods********************************
    In real life car is a object,
    Car has properties like-> weight, color, sit and methods like-> stop, start, shiftGear:
    car         -> object_name
    properties:
    car.name = audi,
    car.weight = 500kg,
    car.color = white,
    car.sit = 4sited
    methods:
    car.start(),
    car.stop(),
    car.shiftGrear(),
    car.break(),
    car.drive()

    Variables contain a single data like: let car = "audi", same as this objects are also contain multiple data in a
    single object like: let car = {
        name : "audi",
        color : "white",
        weight : "500kg"
    }, use jsx to wrapped many variables but name is car and defined with let keyword like a normal variable name, so it 
    is easy to read and understand.
    ** it store variable in key:value pair sepereted by colon, and storing many values seperately comma
    //accessing:->
    like using properties )car.name, car["name"]{object_name.value_name==object_name["key_name"]}

    key:value|name:value pair in javascripts are called PROPERTIES

    Objects are have methods
    than can perform an action on object
    ex: nameAndColor : function(){return this.name + " " + this.color}
    it's perform an action to getting nameAndColor together


    ********************************************************************************************************
    
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.


When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
************************************************************************************************************
 */
const Car = {
    name : "audi",
    color: "white",
    weight: "500kg",
    sayHi: function () {
           console.log(`I am ${Car.name}, my color is: ${Car.color} and i'm ${Car.weight}`);
    },
    satart: function () {
        console.log(`I'm started in Nutral can changed your gear`);
    }
};
// for(let i = 0; i < Car.length; i++)
console.log(Car);
Car.sayHi();
Car.satart();
