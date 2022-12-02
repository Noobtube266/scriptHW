//Variables
//Keyword	Scope	Hoisting	Can Be Reassigned	Can Be Redeclared

//var	Function scope	Yes	Yes	Yes

//let	Block scope	No	Yes	No

//const	Block scope	No	No	No

let username = "Nubbles";
if(username === "Nubbles");{
    console.log(true);
}
console.log(username);

let speciman = "coniving penguin";
let species = "man";
function transform(){
    var species = "A scallywag";
    console.log(species);
}
console.log(species);
transform();
console.log(species);

var fullMoon = true;

if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is indeed a fullmoon, I have become a${species}.`);
}

console.log(`It is no longer a fullmoon I'm no longer a ${species}.`);

//Hoisting- can't define a variable before giving it a value
// console.log(x);
// var x = 100;

// console.log(x);
// x = 100;


// var x = 100;

// function hoist() {
//   if (false) {
//     var x = 200;
//   }
//   console.log(x);
// }

// hoist();

// var y = 100;

// function hoist() {
//   if (false) {
//     var y = 200;
//   }
//   console.log(y);
// }

//hoist();

let z = true;

function hoist() {
  if (3 === 4) {
    let z = false;
  }
  console.log(z);
}

hoist();

var x = 1;
var x = 2;
console.log(x);
// let y = 1;
// let y = 2;
// console.log(y);

//Constants

// const SPECIES = "human"; 

// SPECIES = "werewolf";

// console.log(SPECIES);

// const TODO;

// console.log(TODO);

const CAR = {
	color: "blue",
	price: 15000
}

CAR.price = 20000;

console.log(CAR);

//Objects - just as a number or a string is also a data type. As a data type, an object can be contained in a variable.
//There are two ways to construct an object in JavaScript:

//The object literal, which uses curly brackets: {}
//The object constructor, which uses the new keyword

//Can have properties(noun) and methods(verb)
//A property is the association between a name (key) and value within an object, and it can contain any datatype. 
//A method is a function that is the value of an object property, and therefore a task that an object can perform.

const objectLiteral = {};
const objectConstructor = new Object();


const TMNT = {
	name: "Donatello",
	race: "turtle",
	weapon: "Bo-Staff",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};
console.log(TMNT);
//Calling specific properties
console.log(TMNT.weapon);
//Calling specific methods
console.log(TMNT.greet());
//Adding new propterties
TMNT.age = 15;
console.log(TMNT.age);
//Adding new methods
TMNT.scuffle = function(){
    return `Donnie attacks with a ${this.weapon}.`;
}
console.log(TMNT.scuffle())
//Updating propterties
TMNT.weapon = "Tech Bo";
console.log(TMNT);
//Deleting properties
delete TMNT.weapon;
console.log(TMNT);
//Looping through object properties
const TMNT2 = {
    name: "Leonardo",
	race: "turtle",
	weapon: "Orodachi katana",
};
for(let key in TMNT2){
    console.log(TMNT2[key]);
}
//Converting key values to uppercase
for (let key in TMNT2) {
    console.log(key.toUpperCase() + ':', TMNT2[key]);
  }
//returning array of object keys
console.log(Object.keys(TMNT2));

//Arrays- two ways to create
//The array literal, which uses square brackets.
//The array constructor, which uses the new keyword.

//Access them with the index number in the brackets after listing the array's name
//Attempting to access an item that doesn’t exist will return undefined.

let PowerRangers = [
"Red",
"Yellow",
"Blue",
"Pink",
"Black",
];
console.log(PowerRangers[0]);

//Array literal
let sharks = [
	"Hammerhead",
	"Great White",
	"Tiger",
];
//Array constructor
let Sharks = new Array(
	"Hammerhead",
	"Great White",
	"Tiger",
);
console.log(sharks);
console.log(Sharks);

//Array of mixed datatypes
let mixedData = [
	"String",
	null,
	7,
	[
		"another",
		"array",
	],
];

//Indexing arrays
let seaCreatures = [
	"octopus",
	"squid",
	"shark",
	"seahorse",
	"starfish",
];
//Length of array
console.log(seaCreatures.length);
//Specific index of element
console.log(seaCreatures.indexOf("seahorse"));
//Nonexistent value
console.log(seaCreatures.indexOf("cuttlefish"));
//Nested array
let nestedArray = [
	[
		"salmon",
		"halibut",
	],
	[
		"coral",
		"reef",
	]
];

console.log(nestedArray[1][0]);
//Adding an item to an array
//If we add an item and accidentally skip an index, it will create an undefined item in the array.
//The push method adds an item to the end of an array
//The unshift method adds an item to the beginning of an array
//To remove an item from an array the splice method is used
//The pop method removes the last item in an array
seaCreatures[5] = "whale";
console.log(seaCreatures);
//Modifying an array
//Can also be done using splice method
seaCreatures[0] = "manatee";
console.log(seaCreatures);

//Looping through an array
//For loop
let shellfish = [
	"oyster",
	"shrimp",
	"clam",
	"mussel",
];
for (let i = 0; i < shellfish.length; i++) {
  console.log(i, shellfish[i]);
}
//For of
let mammals = [
	"dolphin",
	"whale",
	"manatee",
];
for (let mammal of mammals) {
	console.log(mammal);
}
//Functions- are basically methods in java
//Can return, print with console.log(), and can be invoked by saying the name of the function
//Arrow functions
//In case of one paramater parenthesis is not included
//can be put on one line
const multiply = (x, y) => {
	return x * y;
}
console.log(multiply(30, 4));

//Classes- are a type of function
//Function expression
const a = function() {}
//Class expression
const b = class {}
//Getting prototype of an object
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(b));

//Functions becoming a constructor
const constructorFromFunction = new a();
console.log(constructorFromFunction);

const ConstructorFromFunction = new b();
console.log(ConstructorFromFunction);

//Destructing - allows you to create new variables using an object property as the value.
const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }
const { id, title, date } = note;
console.log(id);
console.log(title);
console.log(date);

//Array Destructuring
const dates = ['1970', '12', '01']
// const year = dates[0]
// const month = dates[1]
// const day = dates[2]
const [year, month, day] = dates
console.log(year)
console.log(month)
console.log(day)




