// Exercise 1 : Hello Node.Js

// Create a new folder called - npm-node
// Create a JS file called - main.js
// Add the following code to the file main.js :
// Write some more code in the main.js file so when you run it in the command prompt it logs Hello you are 15

        // const a = 5;
        // const b = 10;

        // const result = a + b 
        //     console.log(`Hello you are ${result}`)

    // TERMINAL RESULT
    // clairesacuto@Claires-MacBook-Pro Week-7 % cd Day-1
    // clairesacuto@Claires-MacBook-Pro Day-1 % ls
    // ExercisesXP
    // clairesacuto@Claires-MacBook-Pro Day-1 % cd ExercisesXP
    // clairesacuto@Claires-MacBook-Pro ExercisesXP % ls
    // npm-node
    // clairesacuto@Claires-MacBook-Pro ExercisesXP % cd npm-node
    // clairesacuto@Claires-MacBook-Pro npm-node % node main.js
    // Hello you are 15
    // clairesacuto@Claires-MacBook-Pro npm-node % 


// Exercise 2 : Hello Node.Js #2

// Create a package.json file - use npm init
// Run the main.js file using npm start.
// Tip: you need to change the package.json file in order to achieve this.
// You should output something in the command prompt, for example: Hi! How are you ?


        // console.log(`Hi how are you`)
   
 // TERMINAL RESULT
// clairesacuto@Claires-MacBook-Pro ExercisesXP % cd npm-node
// clairesacuto@Claires-MacBook-Pro npm-node % npm init -y
// Wrote to /Users/clairesacuto/Desktop/DI-Bootcamp-JS/Week-7/Day-1/ExercisesXP/npm-node/package.json:

// {
//   "name": "npm-node",
//   "version": "1.0.0",
//   "description": "",
//   "main": "main.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }
// clairesacuto@Claires-MacBook-Pro npm-node % 
// clairesacuto@Claires-MacBook-Pro npm-node % npm start

// > npm-node@1.0.0 start
// > node main.js
// Hello you are 15
// Hi how are you
// clairesacuto@Claires-MacBook-Pro npm-node % 


// Exercise 3 : Nodemon
// Create a package.json file - use npm init
// Install nodemon
// Write the following code, in a main.js file:
// Tip: you need to change the package.json file in order to achieve this.

// const a = 5;
// const b = 10;
// let x;
// const c = 6;
// x = a + b;


// Add some more code in the main.js, and run it using nodemon in order to log the sum of a + b.

//    const result = a + b 
//             console.log(`Hello you are ${result}`)

            // TERMINAL RESULT
            // clairesacuto@Claires-MacBook-Pro npm-node % nodemon main.js
            // zsh: command not found: nodemon
            // clairesacuto@Claires-MacBook-Pro npm-node % npm start
            
            // > npm-node@1.0.0 start
            // > nodemon main.js            
            // [nodemon] 2.0.20
            // [nodemon] to restart at any time, enter `rs`
            // [nodemon] watching path(s): *.*
            // [nodemon] watching extensions: js,mjs,json
            // [nodemon] starting `node main.js`
            // Hello you are 15
            // [nodemon] clean exit - waiting for changes before restart
            
            
// Update the main.js file to console.log the sum of x + c

const a = 5;
const b = 10;
let x;
const c = 6;
x = a + b;

const result = x + c
console.log(`Hello the result is ${result}`)

// TERMINAL RESULT
// [nodemon] restarting due to changes...
// [nodemon] starting `node main.js`
// Hello the result is 21
// [nodemon] clean exit - waiting for changes before restart
// [nodemon] restarting due to changes...
// [nodemon] starting `node main.js`
// Hello the result is 21
// [nodemon] clean exit - waiting for changes before restart

