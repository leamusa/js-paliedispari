# Palidroma

1. Ask the user to enter a word following this rule:
   < **you need to know if the entered word is palindroma ** >

# Even and Odd

1. The user shall:

- chooses odd or even
- insert number 1 to 5.

2. We generate a `random number` (always from 1 to 5) for the computer (using a function).

3. We sum the two numbers We determine whether the `sum` of the two numbers is even or odd (using a function) We declare who has won.

# Tips of the day

- We always write in Italian the steps we want to do
- We always write only one piece of code at a time, if it works then we move on.

# tools

## Palidroma

1. **User Input Request:**

   - Ask the user to enter a word using `prompt`.

2. **Definition of a Function to Reverse a Word:\***

   - The `reverseWord` function takes a word as input and returns the inverted word;
     a Use the `split` method to convert the word into an array of characters
     b `reverse` to invert the array and `join` to merge the inverted elements into a string.

3. **Function Calling and Comparison:**

   - Call the function `reverseWord` with the word entered by the user and assign the result to `reversedUserWord`. Then compare the original word with the inverted one.

4. **Printing the Result:\***
   - Print a msg using `console.log` based on comparison:
     a If the word is a palindrome, "The word is a palindrome" is printed
     b otherwise "The word is not a palindrome".

# Even and Odd

## Palindrome

1. **User Input Request:**

   - Prompt the user to input a word using `prompt`.

2. **Function Definition to Reverse a Word:**

   - Define the `reverseWord` function, which takes a word as input and returns the reversed word. Utilize the `split` method to convert the word into an array of characters, `reverse` to invert the array, and `join` to concatenate the inverted elements back into a string.

3. **Function Invocation and Comparison:**

   - Invoke (call) the `reverseWord` function with the user's input word and store the result in `reversedUserWord`. Compare the original word with its reversed counterpart.

4. **Result Printing:**

   - Print an informative message using `console.log` based on the comparison:
     a If the word is a palindrome, output "The word is a palindrome";
     b b otherwise, print "The word is not a palindrome".
