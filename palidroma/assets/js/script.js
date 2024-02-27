// Ask the user to enter a word
var userWord = prompt("Enter a word");

// Define a function to reverse a word
function reverseWord(word) {
  // Convert the word into an array of characters
  var characArray = word.split("");

  // Reverse the array
  var reversedArray = characArray.reverse();

  // Join the reversed array into a string
  var reversedWord = reversedArray.join("");

  // Return the reversed word
  return reversedWord;
}

// Call the function to reverse the user-entered word
var reversedUserWord = reverseWord(userWord);

// Compare the original word with the reversed one
if (userWord === reversedUserWord) {
  // Print a message if the word is a palindrome
  console.log("The word is a palindrome");
} else {
  // Print a message if the word is not a palindrome
  console.log("The word is not a palindrome");
}
