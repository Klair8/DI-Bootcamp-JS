// Exercise 1

// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)
// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?

// its going straight to the search page and its written inside the URL itself 
// https://www.marvel.com/search?username=sxqCWX&comments=XSWCEWV


// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted 
// with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

// in the network TAB


// 🌟 Exercise 3 : JSON Mario
// Instructions
// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
// Convert this JS object into a JSON object. What happens to the nested objects ?
    // the nested object had been supported and converted automatically.
const newMario = JSON.stringify(marioGame)
console.log(newMario)


// Convert and pretty print this JS object into a JSON object.
//  Hint : Check out the JSON lesson on the platform.

const newMarioOne = JSON.stringify(marioGame,null, 2)
console.log(newMarioOne)


// Use your web inspector to add a breakpoint. 
// Check the values of the JSON object in the debugger.

//the debugger pause on the breakpoint 