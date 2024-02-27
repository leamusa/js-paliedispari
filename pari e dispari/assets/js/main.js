// script.js

// Function to generate a random number within a given range
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check the winner
function check(choice, evenOdd) {
  // Convert user's choice to uppercase and compare with the result
  if (choice.toUpperCase() === evenOdd) return "User wins";
  return "Computer wins";
}

// Function to check if a number is even or odd
function checkEvenOdd(num) {
  return num % 2 === 0 ? "EVEN" : "ODD";
}

// Function to play the game
function playGame() {
  let playAgain = true;

  while (playAgain) {
    // Get user input for choosing "even" or "odd"
    const evenOddChoice = document.getElementById("evenOddChoice").value;
    console.log("User's choice:", evenOddChoice);

    // Get user input for a number between 1 and 5
    let userNumb;
    while (true) {
      userNumb = parseInt(prompt("Enter a number from 1 to 5:"));
      if (!isNaN(userNumb) && userNumb >= 1 && userNumb <= 5) {
        break;
      }
      alert("Invalid input. Please enter a number from 1 to 5.");
    }
    console.log("User's number:", userNumb);

    // Generate a random number for the computer between 1 and 5
    const pcNumb = random(1, 5);
    console.log("Computer's number:", pcNumb);

    // Calculate the sum of user's number and computer's number
    const sum = userNumb + pcNumb;
    console.log("Sum:", sum);

    // Determine if the sum is even or odd
    const result = checkEvenOdd(sum);
    console.log("Result:", result);

    // Check who the winner is based on user's choice and the result's winner
    const winner = check(evenOddChoice, result);
    console.log("Winner:", winner);

    // Ask if the user wants to play again
    playAgain = confirm("Do you want to play again?");
  }

  alert("Goodbye!");
}

// Attach event listener to the "Play Game" button
document.getElementById("playGameButton").addEventListener("click", playGame);

// Attach event listener to the "Quit" button
document.getElementById("quitButton").addEventListener("click", function () {
  alert("Goodbye!");
});
