// Exercise 1 : Express & JSON
// Instructions
// Create two files : server.js and script.js.
// In the server.js file, create an express server and a route /, using the GET method.
// Add the below Javascript Object in the handler function of the route:
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Use your server to get the static HTML file from the public folder. 
// Check out the lesson named Express Routes & Queries in the Course Notes, 
// more specifically the part “How To Serve Static Files In Express”.

// Your server should run on http://localhost:3000/ to serve the HTML file.
// In the script.js file, fetch your server and get the response. 
// The response should be the JSON Object. 
// console.log this object and display it on the HTML.

const {user} = require ('./database/data.js');
console.log(user)
const cors = require('cors');

const express = require('express');
const app = express(); //
app.use(cors());
app.use('/',express.static(__dirname+'/public'));  

app.listen(3000,() => {
    console.log('Server running on port 3000')
})

app.get('/user',(req,res) => {  
    res.json() //  need to use a json method in order to get the array of object 
})


