// Get user input for choosing "even" or "odd"-prompt
const evenOddChoice = prompt("even or odd");
console.log("User's choice:", evenOddChoice);

// Get user input for a number between 1 and 5 -prompt-parseInt
const userNumb = parseInt(prompt("enter a number from 1 to 5"));
console.log("User's number:", userNumb);

// Generate a random number for the computer between 1 and 5 -random
const pcNumb = random(1, 5);
console.log("Computer's number:", pcNumb);

// Calculate the sum of user's number and computer's number -sum
const sum = userNumb + pcNumb;
console.log("Sum:", sum);

// Determine if the sum is even or odd -result
const result = sum % 2 ? "ODD" : "EVEN";
console.log("Result:", result);

// Check who the winner is based on user's choice and the -result'swinner
const winner = check(evenOddChoice, result);
console.log("Winner:", winner);

// Function to generate a random number within a given range -random-math.floor
function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check the winner -check
function check(choice, evenOdd) {
  // Convert user's choice to uppercase and compare with the result-toUpperCase()
  if (choice.toUpperCase() === evenOdd) return "User wins";
  return "Computer wins";
}

// Function to check if a number is even or odd -check-return
function checkEvenOdd(num) {
  if (num % 2) return "ODD";
  return "EVEN";
}
