// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
};
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

2. Give adam a name property with the value "Adam".

3. Add a spouse property to terah and assign it the value of adam.

4. Change the value of the terah weight property to 125.

5. Remove the eyeColor property from terah.

6. Add a spouse property to adam and assign it the value of terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.


*/
// SET adam as new Object without value
//   INIT name as "Adam"
// ASSIGN property spouse as adam to terah
// MODIFY terah weight to 125
// DELETE terah eyeColor
// ASSIGN property spouse as terah to adam
// ASSIGN property children to terah
//  SET children as Object without value
//    ASSIGN property carson 
//      ASSIGN property name as "Carson"
//    ASSIGN property carter
//      ASSIGN property name as "Carter"
//    ASSIGN property colton
//      ASSIGN property name as "Colton"
// ASSIGN terah children to adam 

// __________________________________________
// Write your code below.

var adam = {
  name: "Adam",
  spouse: terah
};

terah.weight = 125;

delete terah.eyeColor;

terah.spouse = adam;

terah.children = {
  carson: {name: "Carson"},
  carter: {name: "Carter"},
  colton: {name: "Colton"}
};

adam.children = terah.children;






// __________________________________________
// Reflection: Use the reflection guidelines
// 
//  Q. What parts of your strategy worked? What problems did you face?
//    My strategy was simple. To follow the instructions for writing the pseudocode in order. The instructions were pretty straight forward, 
//    so I did not face much difficulties.
//  
//  Q. What questions did you have while coding? What resrouces did you find to help answer them?
//    Assigning a property inside a literal notation, then assigning the property's property was difficult. 
//    avoiding syntax errors that popped up while writing the code allowed me to guess through the process though.
//
//  Q. What concepts are you having trouble with, or did you just figure something out? If so, what?
//    The definition of a "well-written" pseudocode is still hard to grasp. While I find it easier writing a pseudocode more closely resembling 
//    the actual code, the pseudocode standard states otherwise.
// 
//  Q. Did you learn any new skills or tricks?
//    I felt condverting my pseudocode into actual code was easier than before, so I guess I made an improvement in writing pseudocode. 
//    Other than that, the delete function for removing properties of objects was new to me.
//
//  Q. How confident are you with each of the Learning Competencies?
//    
//
//
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
);

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
);

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
);

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
);

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
);

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
);

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
);

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
);

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
);

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
);

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
);

console.log("\nHere is your final terah object:");
console.log(terah);