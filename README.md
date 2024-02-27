## Palidroma

1. Ask the user to enter a word following this rule:
   < **you need to know if the entered word is palindroma ** >

# Even and Odd

1. The user shall:

- chooses odd or even numbers
- chooses  from 1 to 5 numbers

2. We generate a `random number` (always from 1 to 5) for the computer (using a function).

3. We sum the two numbers We determine whether the `sum` of the two numbers is even or odd (using a function) We declare who has won.

# Tips of the day

- We always write in Italian the steps we want to do
- We always write only one piece of code at a time, if it works then we move on.

# tools



## Even and Odd

1. **User Input Request:**

   - `prompt` the user to input a word 

2. **Function Definition to Reverse a Word:**

   - `reverseWord` function, which takes a word as input and returns the reversed word.
   - `split` method to convert the word into an array of characters
   - `reverse` to invert the array
   - `join` to concatenate the inverted elements back into a string.

3. **Function Invocation and Comparison:**

   - `reverseWord` to invoke (call) the function with the user's input word.
   - `reversedUserWord` Memorize the result .
   - `reversed-one` Compare the original word with its reversed-one.

4. **Result Printing:**

based on the comparison: 
- `If  `the word is a palindrome, output "The word is a palindrome". 
- `otherwise `, print "The word is not a palindrome".

## Even and Odd

1. **User Input Requests:**

   - `prompt` the user to choose between "odd" or "even" using .
   - `prompt` the user to enter a number from 1 to 5 using
   - `parseInt` to convert it to an integer using .

2. **User Input and Computer Number Registration:**

   - `evenOddChoice` to Record the user's choice in the variable .
   - `random` to Generate a random number
   - `pcNumb` memorizing into the variable

3. **Sum Calculation and Parity Determination:**

   - `sum`Calculate the sum of the user's number/computer
   - `even or odd` Determine if the sum is using the modulo operator `%` the result in the variable
   - `result`.mem the result in the variAble

4. **Console Information Printing:**

   - Use `console.log` to print information about:
     - The user's choice (`evenOddChoice`).
     - The user's number (`userNumb`).
     - The computer's number (`pcNumb`).
     - The sum (`sum`).
     - The result (even or odd - `result`).

5. **Winner Verification Function Call:**

   - `check` calling the function to determine the winner
   - (`evenOddChoice`) based on the user's choice and the result - (`result`) of the sum calculation .
   - `winner` memoriz the result in the variable .

6. **Function Definitions:**

   - `random` function to generate random numbers.
   - `check` function to verify the winner based on user's choice and sum result.
