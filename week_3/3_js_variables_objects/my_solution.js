// I paired [by myself, with:] on this challenge.
// I did this challenge by myself.
// __________________________________________
// Write your code below.
var secretNumber = 5;
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = [];
var members = ["John", "Sam", "Alex", "Mary"];

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I had a lot of problems with this challenge. First of all, I couldn't run it from the terminal and I thought that the
// installation wasn't good so I uninstalled the program (node) and installed it again. Then, I navigate through my directories,
// opened the my_solution.js and the error again. I read carefully and it wasn't a node error, was the first program error for
// the function assert. It was very complicated to do it from there so I opened the browser console and copy/pasted the code,
// check the errors and defined the variables.
// I'm not sure if I added the objects to the array correctly...but it worked. I feel confident of some learning
// competencies like defining and creating local variables and objects.
// I didn't understand all the TDD stuff. I found tedious not knowing how to start.
// I enjoyed the part where more number of asserts were true, hahaha.
// 
// 
// 
// 
// 
// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

