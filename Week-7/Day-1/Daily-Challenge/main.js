//  Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
// Use the exported module in a script.js file.

 

//  const largeNumber = 356;

//  module.exports = largeNumber


// Part III:
// In the main.js, create a function that returns the current date and time. Export the module.

function currentdate(){
const date = new Date();
return date
}
currentdate()

module.exports = currentdate





