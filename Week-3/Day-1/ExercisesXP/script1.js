// Exercise 1:
// 1-Retrieve the div and console.log it
// 2-Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

const div = document.body.firstElementChild;
console.log(div);
const pete = document.body.firstElementChild.nextElementSibling.children[1].textContent = "Richard";

function name(){
    const allul= document.querySelectorAll(".list");
     for (let ul of allul){
        const li = ul.children[0];
        li.textContent = "claire"
     }
    }
name();

const secondUl= document.body.children[2];
secondUl.children[1].remove();


// Exercise 2 (dont forget to put in comment the exericse 1)
// Add the code above, to your HTML file
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”.
// Add a border to the <li> that contains the text node “Pete”.
// Change the font size of the whole body.

     
document.body.firstElementChild.style.backgroundColor = "lightblue";
document.body.firstElementChild.style.padding = "3em" ;
document.body.firstElementChild.nextElementSibling.children[0].remove();
document.body.children[1].style.border = "2px solid black";
document.body.style.fontSize = "26px";


// Exercice 3(dont forget to put in comment the previous ex)
// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list
//  (<ul>), using the appendChild method.



let newDiv = document.getElementById("navBar")
newDiv.setAttribute("id",'socialNetworkNavigation');
console.log(newDiv);

const liTag = document.createElement('li');
const content = document.createTextNode('logout');
liTag.appendChild(content);
document.body.firstElementChild.appendChild(liTag);

console.log(liTag);


// Exercise 4 : My Book List (dont forget to put in comment the previous ex)
// In the body of the HTML page, create an empty div: <div class="listBooks"></div>
// In the js file, create an array called allBooks. 
// This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice
// Requirements : All the instructions below need 
// to be coded in the js file:

// Using the DOM, render the books inside an HTML table
//  (the HTML table must be added to the <div> created in part 1).
// 
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the
//  book’s details to red.


// i didnt succed to do it ..its not complete sorry //

function generateTable() {

    const allBooks = [
        {
        title: "Lord of the Ring",
        author: "Tolkien",
        // image : a url,
        alreadyRead : true
        },
        {
        title: "Circe",
        author:"Madeline Miller",
        // image : a url,
        alreadyRead :false
        },
    ]

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
      const rowtext = document.createTextNode("tittle");
  
      for (let j = 0; j < 2; j++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${allBooks}[0], column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }


  generateTable();

