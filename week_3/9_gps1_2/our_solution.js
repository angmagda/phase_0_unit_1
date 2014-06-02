// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Maria Magdalena Ang Bejar
//  2.Patricia O'neill

// 0. "YOU SIGNED... WHO?!"

var leonardoDicaprio =  {name: "Leonardo DiCaprio", age: 39, quote: "Rose, you will survive"}
var ryanGosling = {name: "Ryan Gosling", age: 33, quote: "Do you remember me?"}

// 1. "Here they Come!"

var adamSandler =  {name: "Adam Sandler", age: 47, quote: "That's your home! Are you too good for your home?!"};
var kristenBell = {name: "Kristen Bell", age: 33, quote: "Do you wanna build a snowman?"};
var jimCarrey = {name:"Jim Carrey", age:52, quote: "...So you're telling me there's a chance? YEAH!"};

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client (name, age, quote) {
    this.name = name; 
    this.age = age;
    this.quote = quote;
    this.displayClient = displayClient;
    }

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 3. "SHOW 'EM OFF!"

var leonardoDicaprio =  new Client("Leonardo DiCaprio", 39, "Don't let go Rose.");
var ryanGosling = new Client("Ryan Gosling", 33, "Do you remember me?");
var adamSandler =  new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var myClientsarray = [leonardoDicaprio, ryanGosling, adamSandler, kristenBell, jimCarrey];

for (var i = 0; i < myClientsarray.length; i++) {
    console.log(myClientsarray[i]);
    }

// 4. "But wait, there's more!"

var jimCarrey = {showQuote: console.log("...So you're telling me there's a chance? YEAH!")};
function display (showQuote) {
  this.showQuote = showQuote;
}

// 5.  ** BONUS **

var johnnyDepp = new Client ("Johnny Depp", 50, "I think the thing to do is enjoy the ride while you're on it");
var nataliePortman = new Client ("Natalie Portman", 32, "I'm a Gemini, so I change my mind every day");
myClientsarray.push (johnnyDepp, nataliePortman);

for (var i = 0; i < myClientsarray.length; i++) {
    console.log(myClientsarray[i]);
    }

var tomHanks = new Client ("Tom Hanks", 57, "A hero is somebody who voluntarily walks into the unknown");

function displayClient() {
  var result = this.name + " is an actor whose age is " + this.age + " and their favorite quote is " + this.quote;
  console.log(result);
}

// I tried to add a for loop which would add the new client to our Array, but is not working.

for (var n = 0; n < myClientsarray.length; i++) {
  myClientsarray.push[new Client];
}

//  6.  Your Reflection:

// We faced different problems because our lack of JavaScript experince and knowledge. But the important part
// is that we could work it out together and learn from each other. We found answers to our code questions mostly on 
// http://www.w3schools.com and running the code in the console and analysing what the problem was.
// I definitely understand better the functions and I still have trouble with the for loop. But not the parameters or
// instructions, but the block of code that will pass each time. Also, what do you write when your starting value is not 0,
// but a value you don't know exactly?
// I feel confident with most of the learning competencies.
// I really enjoyed the whole challenge. Working in pairs is really nice.
// Spending so much time on it and not getting the results we wanted was a bit tedious, because it wasn't that difficult.
// Most of it is paying attention to the details.