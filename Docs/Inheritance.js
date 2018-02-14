//Object Constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// you can not add a new property to an existing object constructor:
Person.nationality = "English";

//Prototypal Inheritance - A prototype is a working object instance. Objects inherit directly from other objects.
//Link - https://javascript.info/prototype-inheritance

let animal = { eats: true }
let rabbit = { jumps: true, __proto__: animal}
rabbit.eats 	//true
rabbit.jumps	//true
animal.eats		//true

//All JavaScript objects inherit properties and methods from a prototype.
//The JavaScript prototype property allows you to add new properties and methods to object constructors
Person.prototype.nationality = "English";
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
