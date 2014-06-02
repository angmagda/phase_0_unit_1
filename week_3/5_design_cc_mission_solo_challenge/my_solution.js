// This is a solo challenge

// Your mission description:
// Rescue the cat from the tree
// Objectives:
//* xun climbs up a tree
//* rescues the cat
//* gets common object
//* gets down from the tree
//* terra transforms the common object

// terra object - tranforms common objects into natural, ecological ones.
// xun object - saves the cat from different situations, collects common objects, and take them to Terra.
// cat object - gets in trouble...
// 

// Pseudocode
// CREATE terra, xun, and cat objects.
// SET name, age, height, weight, eyeColor, hairColor, hairLength, clothes, and superpower values for terra object.
// SET name, age, height, weight, eyeColor, hairColor, hairLength, and clothes values for xun object.
// SET name, age, height, weight, eyeColor, and color values for cat object.
//
// DEFINE function to move up
// DEFINE function to move right
// DEFINE function to move down
// DEFINE function to move left
// DEFINE function to take objects
// DEFINE function to give objects
// DEFINE function to transform an object
// DEFINE function to run to a specific place

// OBJECTIVES
// MOVE xun up 2x
// MOVE xun right 1x
// TAKE cat
// TAKE common object
// MOVE xun left 1x
// MOVE xun down 2x
// MOVE xun towards terra
// TRANSFORM object


// Initial Code
var terra = {
	name: "Terra",
	age: 350,
	height: 100,
	weight: 60,
	eyeColor: "green",
	hairColor: "light brown",
	hairLength: "long",
	clothes: "long robes",
	superPower: "tranform common objects into ecological ones"
} 

var xun = {
	name: "Xun"
	age: 10,
	height: 30,
	weight: 25,
	eyeColor: "brown",
	hairColor: "black",
	hairLength "short",
	clothes: "shorts and t-shirt"
}

var cat = {
	name: "Cat",
	age: 1,
	height: 5,
	weight: 3,
	color: "black and white",
	eyeColor: "blue",
}

var moveUp = function();
var moveRight = function();
var moveDown = function();
var moveLeft = function();
var take = function();
var give = function();
var transform = function();
var run = function();

moveUp();
moveUp();
moveRight();
take();
take();
moveLeft();
moveDown();
moveDown();
moveLeft();
give();

// Refactored Code

// Create and assign values to objects
var terra = {
	name: "Terra",
	age: 350,
	height: 100,
	weight: 60,
	eyeColor: "green",
	hairColor: "light brown",
	hairLength: "long",
	clothes: "long robes",
	superPower: "tranform common objects into ecological ones"
} 

var xun = {
	name: "Xun"
	age: 10,
	height: 30,
	weight: 25,
	eyeColor: "brown",
	hairColor: "black",
	hairLength "short",
	clothes: "shorts and t-shirt"
}

var cat = {
	name: "Cat",
	age: 1,
	height: 5,
	weight: 3,
	color: "black and white",
	eyeColor: "blue",
}


// Defining functions
var moveUp = function(parameter) {
	movement code;
}
var moveRight = function(parameter) {
	movement code;
}
var moveDown = function(parameter) {
	movement code;
}
var moveLeft = function(parameter) {
	movement code;
}
var take = function(parameter) {
	movement code;
}
var give = function(parameter) {
	movement code;
}
var transform = function(parameter) {
	movement code;
}
var run = function(parameter) {
	movement code;
}

// Methods applied to objects
this.moveUp();
this.moveUp();
this.moveRight();
this.take();
this.take();
this.moveLeft();
this.moveDown();
this.moveDown();
this.moveLeft();
this.give();


// Reflection

// This week was a little complicated...I had to travel and I lost time. Because I thought this was a very
// difficult challenge I tried to do it since the beginning, but then I did the other challenges and left 
// this one to the end.
// I have a lot of questions, but the main question is how do I add movement in a simple way, with the things
// I know at this point? I looked up for the answer and it was too complicated to implement because I didn't 
// understand completely how it worked. I feel confident with the first two learning competencies, but
// definitely I need more practice.
// The creative part was really enjoyable, I like to imagine things and visualize how I can make them work.
// I found very tedious not knowing how to implement the code, to research and not understanding anything.
// I will leave this challenge in this point and come back when I find how to make it work.