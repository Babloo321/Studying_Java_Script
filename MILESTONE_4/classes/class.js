/* Use the keyword class to create a class.
   Always add a method named constructor():
    A JavaScript class is not an object.
    It is a template for JavaScript objects.

    class Car {
        constructor(name, year){
            this.name = name;
            this.year = year;
        }
    }
    The example above creates a class named "Car".
    The class has two initial properties: "name" and "year".

    The constructor method is called automatically when a new object is created.

    The Constructor Method
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.

***Class Methods***
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
   */

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    var p1 = new Person('Babloo', 25);
    console.log(p1);
    console.log(p1.name);

    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
        age(){
            const date = new Date();
            return date.getFullYear() - this.year;
        }
    }
    var c1 = new Car("audi", 2000);
    console.log(c1);
    console.log(c1.age());

    class Car2 {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
        age = (x) => {
            return (x - this.year);
        }
    }
    let date = new Date();
    let year = date.getFullYear();
    let c2 = new Car2("Mahindra", 1999);
    let out = c2.age(year);
    console.log(c2);
    console.log(out);