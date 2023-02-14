// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) 
// that takes a number as an argument.

// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

function compareToTen(number){
    const mypromise = new Promise(function(resolve, reject){
            if( number <=10){
                resolve (number);
            } else{
                reject (number);
            }
        }); 
    
    return mypromise
}

compareToTen(15)
  .then(result => console.log(result,"yeah"))
  .catch(error => console.log(error ,"ohhh"))


//   🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns
//  a “success” string.

// How can you make your promise from part 1 shorter using Promise.resolve()
//and console.log “success”?

//  ==>let promise = new Promise(resolve => resolve("succes"));

// Add code to catch errors and console.log
//  ‘Ooops something went wrong’.

function findTheWord(word){
    const mypromise = new Promise(function(resolve, reject){
        setTimeout(function () {
                if( word === "string"){
                resolve (word.toUpperCase());
            } else{
                reject ("oooops something went wrong");
            }
        },4000)
    }) 
    return mypromise
}

findTheWord(15)
  .then(result => console.log(result,"yeah"))
  .catch(error => console.log(error ))


//   🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) 
// to create a promise that will resolve itself
// with a value of 3.
// Use Promise.reject(error) to create a promise 
// that will reject itself with the string “Boo!”

const promise1 = Promise.resolve(3);

promise1.then((value) => {
  console.log(value);
});


const promise2 = Promise.reject("boo!");

promise2.catch((value) => {
  console.log(value);
});
