//ES6, Harmony, ES2015, Javascript 6

//---------------------------------------------------------------//

//let, const

//---------------------------------------------------------------//

//Template Literals - String Interpolation
const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`
//"Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card."

//---------------------------------------------------------------//

//Destructuring - arrays and objects
const point = [10, 25, -34];
const [x, y, z] = point;
const [x, , z] = point
 
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};
const {type, color, karat} = gemstone;
const {color} = gemstone;

//---------------------------------------------------------------//

//Shorthand Object Literals
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

const newGemStone = {type, color, carat}; //Shorthand

//---------------------------------------------------------------//

//Shorthand Method Names
//Old way
const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};

//New way - keyword 'function' is removed
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};

//---------------------------------------------------------------//

//Iterable Protocol


//---------------------------------------------------------------//

//for-of loop
// - iterates over iterable objects - objects that implement iterable protocol - String, Array, Map, Set
// - Objects are not iterable by default
// - Earlier - for, for-in, forEach (method only for array)
var tweets = ["hello world", "this is awesome", "lol"]
for (const tweet of tweets){
	console.log(tweet)
}

//---------------------------------------------------------------//

//Spread (...) - array to multiple elements
// - expand, or spread, iterable objects into multiple elements.
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits, ...vegetables];
console.log(produce); //[ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]

//---------------------------------------------------------------//

//Rest (...) - multiple elements to array
// - represent an indefinite number of elements as an array
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items); //20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

//---------------------------------------------------------------//

//Arrow Functions - Same as closure rules
// - Regular functions can be either function declarations or function expressions, 
// - however arrow functions are always expressions 
// - stored in a variable, passed as an argument to a function, and stored in an object's property.

//Rules: 
//Parameter parenthesis: 1 parameter - not reqd, 0/>=2 parameters - reqd
//Body curly braces + return: 1 statement - not reqd, else reqd

//Old way
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
  return name.toUpperCase();
});

//New way
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);

//---------------------------------------------------------------//

//Default Function Parameters
function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}
greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

//---------------------------------------------------------------//























