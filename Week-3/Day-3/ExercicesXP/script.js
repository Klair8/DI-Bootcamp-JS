// Exercise1:
// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// setTimeout(helloWorld, 2000);

// function helloWorld () { 
//  alert("hello World")
// }


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// setTimeout(helloWorld, 2000)

// function helloWorld () { 
// const paragraph = document.createElement("p");
// const text = document.createTextNode( "Hello World ");
// paragraph.appendChild(text);
// document.querySelector("#container").appendChild(paragraph);
// }


// Part III ==> do not forget to put in comment the exercice before!!

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// // Instead of clicking on the button, the interval will be cleared as soon 
// as there will be 5 paragraphs inside the <div id="container">.

// const message = setInterval(helloWorld, 2000)
// let counter = 1

// function helloWorld () { 
// const paragraph = document.createElement("p");
// const text = document.createTextNode( "Hello World ");
// paragraph.appendChild(text);
// document.querySelector("#container").appendChild(paragraph);
// if (counter==5){
//     clearInterval(message);
// }
// counter++;
// }

// const btn = document.querySelector("#clear");
// btn.addEventListener("click",stopMessage)

//  function stopMessage() {
//     clearInterval(message);
//  }
  

// Exercise 2: Move the Box ( dont forget to comment the others exercises )
// Copy the code above, to a structured HTML file.(index1 for me)
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side 
// of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, 
// until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container


// const redBox = document.getElementById("animate");

// const btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", myMove);

// let pos = 0  

//     function myMove() {
//       setInterval(function(){
//             if  (pos === 350)  {
//               clearInterval();
//             }
//             else {
//                 pos++;
//                 redBox.style.left = pos + 'px';
//             } }, 1000)
//         };




// // Exercise 3:( please see index2 ==> we didnt do it in the course i found a god exemple and use it)
// // Copy the code above, to a structured HTML file.
// // In your Javascript file add the functionality which 
// // will allow you to drag the box and drop it into the target. 
// // Check out the Course Notes named DOM animations.


// position of mouse
let x = 0;
let y = 0;

const Redbox = document.getElementById('box');

// Handle the mousedown event that's triggered when user drags the element
const mouseDownHandler = function (e) {
// Get the current mouse position
    x = e.clientX;
    y = e.clientY;

    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // Set the position of element
    Redbox.style.top = `${Redbox.offsetTop + dy}px`;
    Redbox.style.left = `${Redbox.offsetLeft + dx}px`;

    // Reassign the position of mouse
    x = e.clientX;
    y = e.clientY;
};

const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
};

Redbox.addEventListener('mousedown', mouseDownHandler);