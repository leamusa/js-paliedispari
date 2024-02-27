// Function to generate a random number for even or odd (1-5)
function generateRandomEvenOdd() {
  return Math.floor(Math.random() * 5) + 1;
}

// Function to check the winner
function check(choice, sum) {
  // Check if the sum is even or odd
  const result = sum % 2 === 0 ? "EVEN" : "ODD";

  // Convert user's choice to uppercase and compare with the result
  if (choice.toUpperCase() === result) return "User wins";
  return "Computer wins";
}

// Function to play the game
function playGame() {
  let playAgain = true;

  while (playAgain) {
    // Get user input for choosing "even" or "odd"
    const evenOddChoice = document.getElementById("evenOddChoice").value;
    console.log("User's choice:", evenOddChoice);

    // Generate random numbers for both player and computer
    const playerNumber = generateRandomEvenOdd();
    const computerNumber = generateRandomEvenOdd();
    console.log("Player's Number:", playerNumber);
    console.log("Computer's Number:", computerNumber);

    // Calculate the sum of player's number and computer's number
    const sum = playerNumber + computerNumber;
    console.log("Sum:", sum);

    // Determine the result and check who the winner is
    const winner = check(evenOddChoice, sum);
    console.log("Winner:", winner);

    // Update results in HTML
    updateResultsInHtml(
      evenOddChoice,
      playerNumber,
      computerNumber,
      sum,
      winner
    );

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

// Function to update results in HTML
function updateResultsInHtml(
  userChoice,
  playerNumber,
  computerNumber,
  sum,
  winner
) {
  // Create a new paragraph element to show results
  const resultParagraph = document.createElement("p");
  resultParagraph.innerHTML = `
    User's choice: ${userChoice}, 
    Player's number: ${playerNumber}, 
    Computer's number: ${computerNumber}, 
    Sum: ${sum}, 
    Result: ${winner}, 
    Winner: ${winner}
  `;

  // Aggiorna il contenitore "gameResults" rimuovendo i paragrafi precedenti
  const gameResultsContainer = document.getElementById("gameResults");
  gameResultsContainer.innerHTML = "";

  // Appendi il nuovo paragrafo al contenitore "gameResults"
  gameResultsContainer.appendChild(resultParagraph);
}
