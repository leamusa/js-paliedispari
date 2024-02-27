// Definisci una funzione per invertire una parola
function reverseWord(word) {
  // Convert la parola in un array di caratteri
  var charArray = word.split("");

  // Invert l'array
  var reversedArray = charArray.reverse();

  // Connect l'array invertito in una stringa
  var reversedWord = reversedArray.join("");

  // Return la parola invertita
  return reversedWord;
}

// Ask all'utente di inserire una parola
var userWord = prompt("Inserisci una parola");

// Call o invoca la funzione per invertire la parola inserita dall'utente
var reversedUserWord = reverseWord(userWord);

// Confronta la parola originale con quella invertita
if (userWord === reversedUserWord) {
  // Print un messaggio se la parola è un palindromo
  console.log("La parola è un palindromo");
} else {
  // Print un messaggio se la parola non è un palindromo
  console.log("La parola non è un palindromo");
}
