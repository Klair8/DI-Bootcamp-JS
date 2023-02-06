// Exercise 1 : Scope
// Instructions
// Analyse the code below, and 
// predict what will be the value of a in all the following functions.

// Write your prediction as comments in a js file. 
// Explain your predictions.

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);

// // #1.1 - run in the console:
// funcOne()

// Prediction 3
// the variable let is a local variable BUT outside the bracket so 
// is have a block scope ==> the alert is taking in conideration a = 3

// #1.2 What will happen if the variable is declared with const instead of let ?

// the same for const : if it was declared in the block scope its not accessed outside

// //#2
// let a = 0;

// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() 
// funcTwo() 
// funcThree()

// funcThree() ==>  the let a = o is a global variable so its taken in consideration 
// is taking in consideration as its install in a global scope

// funcTwo() ===> nothing happen as there isnt any alert in the function;

// funcThree() ==> the answer is 5 :
// ==> the firs tie we call the funThree function an it = to the global scope let so )
// ==> after the code of the functwo is call a = 5
// ==> the thrid fonction is called again keeping the variable 5 


// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?

// ==> if it was a const ..it will be global scope but it will not work inside as its not declare inside the function 

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// funcFour() ==> there is notinhg for it as no console log or alert it doesnt show 
// funcFive() ==> its a window scope /root scope/ so it appears un the funcfive 


// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()

// funcSix() ==> inside the funcSix function TEST;, because we are running the function
// and inside of it the let is declare as TEST.

// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// ==>  it will not take in consideration also , as in the fonction we over written the global scope


// //#5

// const a = 2;
//  if (true) {
// let a = 5;
//   alert(`in the if block ${a}`);
// }
//  alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console

// alert i = 5
// alert outside  = 2

// ==> alert outside the function is taking the global variable innto consideration
// ==> the alert inside the function is taking the variable that is inside the function
// because its overwrittng the one that is outside 

// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// it will be the same :
// const is a global variable so it will be taken into consideration for the outside alert and it will be result 5
// the inside alert will still have his own local scope and it will run by it so it will be 2



// EXERCISE 2
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. 
// If winBattle() is true, the experiencePoints variable 
// should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

function winBattle(experiencePoints){
    return (experiencePoints? "10" : "1"); 
}

console.log(winBattle(true));
// expected output: 10

console.log(winBattle(false));
// expected output: "1"

// EXERCISE 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function 
// that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output

// Example:
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const myArray = [10,20,30 ] 
myArray.forEach(function(element, index) { 
    return (element? `Hello` : index);
   
})
console.log(myArray(true))
// expected output: hello

console.log(myArray(false))
// expected output: 10,20,30 

// EXERCISE 4 : Colors
// Write a JavaScript program that displays the colors in the following order
//  : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

// Check if at least one element of the array is equal to the value “Violet”. 
// If yes, console.log("Yeah"), else console.log("No...")

// Hint : Use the array methods taught in class. 
// Look at the lesson Array Methods.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((colors, index) => { 
    for (let i = 0 ; i <=0 ; i++){
    console.log(index+1 + `#choice is`, colors)
    }
    
}); 

const result = colors.some((colors) => {
    console.log(colors);
    return colors = "Violet";
});
console.log(result); 

//  EXERCISE 5
//  Write a JavaScript program that displays the colors in the following order
//   : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

ordinal.forEach((letters) => { 
    for (let i = 0 ; i <=0 ; i++){
    console.log( letters)
    }
}); 

colors.forEach((colors, index) => { 
    for (let i = 0 ; i <=0 ; i++){
    console.log (index+1 + letters + `#choice is`, colors)
    }
   
}); 


// EXERCISE 6
// In this exercise, you have to decide
//  which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).

// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]

// Create a program that modifies the expenses (ie. the positive AND the negative expenses) 
// so that they will include taxes (multiply each expense by the VAT).

// Display your current bankAccount standing at the end of the month.

let bankAmount = 400;
const TAXES = 1.17;
const data = ["+200", "-100", "+146", "+167", "-90"]

data.forEach((elem)=> bankAmount+= elem*TAXES)
  
console.log(bankAmount);
   