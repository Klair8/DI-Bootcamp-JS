// Exercise 1 : Favorite Color
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let sentence = ["my","favorite","color","is","blue"];
let sentencestring = sentence.toString();

console.log(sentencestring);


// Exercise 2 : Mixup
// // 1 Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

// 4. Finally console.log the new concatenated string.

let str1="mix";
let str2 ="pod"

let newStr1 = str1.slice(0,2) + str2.slice(2)
let newStr2 = str2.slice(0,2) + str1.slice(2)

const allString = `${newStr1} ${newStr2}`;

console.log(allString);

// Exercise 3 : Calculator
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.

// BONUS: Make a program that can subtract, multiply, and also divide!

 const userAnswer = Number(prompt("Give your first number "));
 const num1 = userAnswer;
 console.log(num1);

 const userAnswer2 = Number(prompt("Give your second number "));
 const num2 = userAnswer2;
 console.log(num2);

const sum = num1 + num2;
const multiple = num1 * num2;

 alert(`the total of your numbers are ${sum}!`);
 alert(`the multiplication of your numbers are ${multiple}!`);


