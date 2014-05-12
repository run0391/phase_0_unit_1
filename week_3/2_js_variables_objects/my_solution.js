// I paired [by myself] on this challenge.




// Pseudocode
//  IF test 1 and/or test 2 returns an error THEN
//    change value of secretNumber to 7
//  IF test 3 and/or test 4 returns an error THEN
//    change value of allowedIn to 'just open the door.'
//  IF test 5 and/or test 6 returns an error THEN
//    change value of allowedIn to false
//  IF test 7, test 8 and/or test 9 returns an error THEN
//    change instance of members to an array
//    and
//    change first index value of members array to 'John'
//    change fourth index value of members array to 'Mary'


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "David", "Ashe", "Mary"];







// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// The code itself is already refactored. I don't see any further way to make it more efficient.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// I found it hard to understand what the assignment wanted me to do. 
// After looking at the pseudocode standards, I used an IF/THEN syntax to write my pseudocode.
// I still find it difficult figuring out if I should translate the code into an IF/ELSE, 
// or if I should just assign variable values and types to pass the test.
// I understand the concepts of TDD, but pseudocode became a different concept to me.
// However after searching online, I read that developers either choose between TDD or PPP(Psudocode Programming Process)
// when writing code. I wonder if the two can be used at the same time, or if I should just choose one.
// First writing a pseudocode for the test and the process of tackling the test articles makes more sense to me, 
// rather than writing the test and coming up with a pseudocode for the test. 
// I might not be grasping the concept well enough since I think this way though.
// I will definitely have to review this concept. 


// my sources : http://codebetter.com/darrellnorton/2004/10/14/does-anyone-use-the-pseudocode-programming-process/
// http://java.dzone.com/news/tdd-small-steps-and-no-need


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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
);

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
);

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
);

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
);

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
);

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
);

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
);

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
);

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
);

