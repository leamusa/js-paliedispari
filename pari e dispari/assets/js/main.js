// Declaration and Initialization of Variables
const evenOddChoice = prompt("even or odd");
const userNumber = parseInt(prompt("enter a number from 1 to 5"));

// Generate a random number for the computer between 1 and 5
const pcNumber = random(1, 5);

// Calculate the sum of user's number and computer's number
const sum = userNumber + pcNumber;

// Determine if the sum is even or odd
const result = sum % 2 ? "ODD" : "EVEN";

// Check who the winner is based on user's choice and the result
const winner = check(evenOddChoice, result);

// Function to generate a random number within a given range
function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
