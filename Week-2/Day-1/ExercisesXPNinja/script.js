// // Exercise 1 : Evaluation
// // For each expression, predict what you think the output will be in a comment (//) without first running the command.
// // Of course, explain each prediction.

// // Then run the expression in the console.
// //  Note the actual output in a comment and compare it with your prediction.

// // Evaluate the comparisons found below:

5 >= 1
// True 5 is higher than 1
console.log(5 >= 1);
0 === 1
//  false , here 0 isnt egale to 1
console.log(0 === 1);
4 <= 1
// false 4 isnt inferior at 1
console.log(4 <= 1);
1 != 1
//  false , 1 egale 1  and putting the exclamation dot mean its not egale anymore
console.log(1 != 1);
"A" > "B"
// false A is inferior at B
console.log("A" > "B");
"B" < "C"
// true in the binary character table the number go up in the alphabet order
console.log("B" < "C");
"a" > "A"
//  true the binary table character table begin with alphabet with lowercase and pass after to uppercase
console.log("a" > "A");
"b" < "A"
// false the B lowercase will be always higher thn the A uppercase
console.log("b" < "A");
true === false
//  false , true isnt egale to false , if we want to do that it will be like that ( true=false )
console.log(true === false);
true != true
//  false , true is true , so putting the exclamation ! just say that true is not true ...
console.log(true != true);


// // Exercise 2 : Ask For Numbers
// // Ask the user for a string of numbers separated by commas
// // Console.log the sum of the numbers.
// // Hint: use some string methods
// // Examples
// // "2,3"➞ 5

// // let text = Number(prompt("Pease give us a string of numbers seperated by commas?"));
// // const myArray = text.split(",");
// // console.log(myArray);

 let first = prompt("enter your first number");
 let second = prompt ("enter second number");
 let third = prompt ("enter third  number");
 let sum = Number (first) + Number(second) + Number(third);
 alert(`the sum is ${sum}`);


// Exercise 3 : Find Nemo
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"

const str = prompt("Please give us a sentence containing the word “Nemo");
let nemoName = str.indexOf("Nemo");

if (nemoName>0){
    console.log("you didnt write Nemo !!");
}else{
    console.log(`I found Nemo at position ${str.indexOf("Nemo")}`);
}


// Exercise 4 : Boom

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. 
// Follow the rules below:
// If the number given is less than 2 : return “boom”

// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)

// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, 
// return the string in ALL CAPS and add an exclamation mark to the end.

// Examples
// 4 ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// // 1 is lower than 2, so we return "boom"

const str1 =prompt("Please give us a Number");
let word = "boom"
let find0= word.indexOf('oo');

if(str1>2 ){
console.log(findO*2) 
}else{
    console,log(blah)
}

