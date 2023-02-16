// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and 
// return an array of resolved values.
// If any of the promises are rejected, 
// the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1,promise2,promise3])
.then(values=>{
    console.log(values);
})
.catch(() => console.log('error'))


//the promise.all take an array of Promises and returns a new promise.
//the order of the resulting  is the same as in its source promises.

// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities,
//  using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise
//  for both city ONLY when both promises are resolved
// Hint : Use Promise.all()


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

