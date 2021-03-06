
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

var adam = {name: "Adam"};  // Define var adam  and assign name property with the value "Adam"
terah.spouse = adam;  // Add a spouse property to terah and assign it the value of adam.
terah.weight = 125; // Change the value of the terah weight property to 125.
delete terah.eyeColor;  // Remove the eyeColor property from terah.
adam.spouse = terah;  // Add a spouse property to adam and assign it the value of terah.
terah.children = {};  // Add a children property to terah and and use object literal notation to assign this variable the value of a JavaScript Object object with no properties.
terah.children.carson = {name: "Carson"}; // Add a carson property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carson".
terah.children.carter = {name: "Carter"}; // Add a carter property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carter".
terah.children.colton = {name: "Colton"}; // Add a colton property to the value of the terah children property and assign it the value of an object with the property name with a value of "Colton".
adam.children = terah.children; // Add a children property to adam and assign it the value of terah children.

// __________________________________________
// Reflection: Use the reflection guidelines
// In this challenge I ran the code from the browser console since the beginning. 
// I didn't understand which pseudocode to turn into code, but I followed step by step the outline of Release 1. Initial solution.
// each time I had a question I went back to the JavaScript reading material and I researched the syntax for deleting a property
// at http://answers.oreilly.com/topic/2138-how-to-use-object-literals-in-javascript/.
// I noticed that I have trouble remembering JavaScript syntax. I feel a little more confident with the learning competencies
// expected for this challenge.
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)