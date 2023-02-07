// // // 🌟 Exercise 1 : Find The Sum
// // // Instructions
// // // Create a one line function 
// // // (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// // let sum = (a,b) => a + b;
// // console.log(sum (4,5));


// // // 🌟 Exercise 2 : Kg And Grams
// // // Instructions
// // // Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// // // First, use function declaration and invoke it.
// function calculate(kg) {
//     return kg * 1000;
//   }
// console.log(calculate(5));

// // // Then, use function expression and invoke it.

// (function calculate(kg){
//  console.log(kg*1000)
// })(7)

// // // Write in a one line comment, the difference between function declaration and function expression.
// // // 1: The function declaration defines a function with the specified parameters.
// // // 2:// IIFE is instantiated by a set of brackets and invoked by another set of brackets next to it in order to run the function immediately.


// // // Finally, use a one line arrow function and invoke it.
//  let calculate3 = (kg) => kg * 1000;
//  console.log(calculate3(6))

//  🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: 
// number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence 
// like "You will be a <job title> in <geographic location>, 
// and married to <partner's name> with <number of children> kids."

// (function (numbers, pname, location, job){
//     console.log(`You will be a ${job} in ${location},and married to ${pname} with ${numbers} kids.`)
// })("3", "john", "paris" ,"doctor")

// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.
// Create a Bootstrap Navbar in your HTML file.

// In your js file, create a self invoking funtion that takes 1 argument: 
// the name of the user that just signed in.
// The function should add a div in the nabvar, 
// displaying the name of the user and his profile picture.

// (function (user) {
//     const div= document.createElement('div');
//     div.innerText = user;
//     const image = document.createElement("img")
//     // image src =""
//     const profil = document.querySelector(".navbar");
//     profil.appendChild(div);
//     image.appendChild(div)

// })("John")

// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: 
// the size of the beverage the client wants - small, medium or large.

// // The inner function named addIngredients receives 3 ingredients, 
// and displays on the DOM a sentence like The client wants a <size drink> juice, 
// containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. 
// Then invoke the outer function in the global scope.

function makeJuice (size){

     function addIngredients(first,second, three){
        console.log(`The client wants a ${size} size juice, containing ${first }, ${second },${three}` )
    }
    addIngredients("apple","melon","strawberry");
  
}
makeJuice("small")

//  Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, 
// and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a
//  sentence like The client wants a <size drink> juice, containing <first ingredient>, 
//  <second ingredient>, <third ingredient>". Use the forEach method.

// // The client wants 6 ingredients in his juice, therefore, invoke the addIngredients 
// function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice 
// function in the global scope.

// function makeJuice (size){
//  const ingredients= []

//     function addIngredients(first,second, three){
//         ingredients.push(first,second, three)
// //        console.log(`The client wants a ${size} size juice, containing ${first }, ${second },${three}` )
//   }

//    function displayJuice(){
//     console.log(`The client wants a ${size} size juice, containing ${ingredients[]}` )
//    }
//    addIngredients("apple","melon","strawberry");
//    addIngredients("tomato","whisky","gin");
//    displayJuice()
// }
// makeJuice("small")