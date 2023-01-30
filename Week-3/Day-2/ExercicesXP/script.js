// Exercise 1
// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
//  Add a event listener which will change the background color of the h2 to red, 
// when it’s clicked on.
// // Add an event listener which will hide the h3 when 
// it’s clicked on (use the display:none property).
// // Add a <button> to the HTML file, that when clicked on, 
// should make the text of all the paragraphs, bold.

const h1 = document.getElementsByTagName("h1");
console.log(h1);

const removeLastP = document.getElementsByTagName("p")[3];
removeLastP.remove();

const h2 = document.getElementsByTagName("h2")[0];
h2.addEventListener("click",changeToRed);

function changeToRed(){
h2.style.backgroundColor = "red";
 };

const h3 = document.getElementsByTagName("h3")[0];
h3.addEventListener("click",displayNone);

function displayNone(){
    h3.style.display = "none";
};


const btn=document.querySelectorAll("#btn")[0];
btn.addEventListener("click", displayBold);

const para=document.getElementsByTagName("p");

 function displayBold(){
    for (let i = 0; i < para.length; i++) {
        para[i].style.fontWeight = "bold";
 };
}

 const tittleH1 = document.getElementsByTagName("h1");
 tittleH1.addEventListener("resize", biggerFont);

 function biggerFont(){
    tittleH1.style.fontSize = "60px";
 };

// Exercise 2 ( please put ex1 in comment)
// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.

const firstForm = document.forms;
console.log(firstForm);

const lName = document.getElementById('lname').id;
const fName = document.getElementById('fname').id;
const submit =document.getElementById('submit').id;
console.log(lName);
console.log(fName);
console.log(submit);

const lName1 = document.getElementById("lname").name;
const fName1 = document.getElementById('fname').name;
console.log(lName1);
console.log(fName1);

// When the user submits the form (ie. submit event listener) use event.preventDefault()
// , why ?
//==> Answer : in order to keep the data that the user , 
// enter in the form and not do a refresh on the page

// Get the values of the input tags, make sure that they are not empty,
//  create an li per input value, then append them to a the 
// <ul class="usersAnswer"></ul>, below the form.
// const form = document.forms[0];
// form.addEventListener("submit", retrieveValue);

function retrieveValue(e){
    e.preventDefault(); 
    const valueInput = e.target.fname.value;
    const list =  document.createElement("li");
    const text = document.createTextNode(`the user types ${valueInput}`)
    list.appendChild(text);
    document.firstElementChild.lastElementChild.children[1].appendChild(list)
}

// Exercise 3 ( please put the exercises before in comment)
// In the JS file:
// Declare a global variable named allBoldItems.
// Create a function called getBold_items() that takes no parameter. 
// This function should collect all the bold items inside the paragraph 
// and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the 
// bold text to blue.
// Create a function called return_normal() that changes the color of all 
// the bold text back to black.
// Call the function highlight() on mouseover 
// (ie. when the mouse pointer is moved onto the paragraph), 
// and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 


const allBoldItems = document.getElementsByTagName("strong")[0];

function getBold_items(){
for(let i=0; i<allBoldItems.length;i++) {
    console.log(allBoldItems[i].innerText)
}
}
getBold_items();

allBoldItems.onmouseover = function highlight (evt){
    let target = evt.target;
    target.style.color = 'pink';
  }
    for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "blue";
};

    
allBoldItems.onmouseout =function return_normal(evt){
    let target = evt.target;
    target.style.color = 'black';
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black";
   }
   };


//Exercise 4
// Write a JavaScript program to calculate the volume 
// of a sphere.

function volume_sphere()
 {
  let volume;
  let radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;


// Exercise 5 : Event Listeners
// Add many events listeners to one element on your webpage. 
// Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, 
// change position y, change color, change the font size… and more.


const h1 = document.getElementsByTagName("h1")[0];
h1.addEventListener ("click", changeToRed );
h1.addEventListener("mouseover", MouseOver); 
h1.addEventListener("ondblclick", dblClick); 

function changeToRed(){
h1.style.backgroundColor = "red";
 };


function MouseOver() { 
h1.style.backgroundColor = "Violet";
} ;

function dblClick() { 
h1.innerHTML+= "Hello Reality";
} ;    
