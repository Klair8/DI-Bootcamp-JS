
// let counter = 0

// const changeColor =(event) =>{
//     event.target.style.color = "red";
// }

// const addPara = () => {
//         counter ++
//         const container = document.getElementById("container")
//         const para = document.createElement('p');
//         para.addEventListener("mouseover", changeColor) ; // inside the first function because it where i create my p 
//         const text = (counter%3===0) ? "Hello" : "New Paragraphe";
//         const textP = document.createTextNode(text)
//         para.appendChild(textP);
//         container.appendChild(para);
// }


// const btn = document.getElementById("btn")
// btn.addEventListener("click", addPara)

// QUESTION 28

// Use **async await**, and **the fetch API** to fetch a fact on cats and display it.
// Use this third party API :  `https://catfact.ninja/fact`
//     1. In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM 
//     2. In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
//     3. Make sure to use try and catch

// const button = document.getElementById("btn");
// button.addEventListener('click',getData);

// function getData () {
//     (fetch("https://catfact.ninja/fact"))
//     .then((resOne) => {
//         if(resOne.status !== 200) {
//             throw new Error ("couldn`t receive the data")
//         } else {
//             const data = resOne.json();
//             return data;   
//         }
//     })

//     .then((resTwo) => { 
//             console.log(resTwo.fact); 
//             displayData(resTwo.fact) //append on the page
//     })

//     .catch((err) => console.log("IN THE CATCH", err))
// }

// getData()


// function displayData(facts) {
//     const section = document.getElementById("container");
//     const div = document.createElement("div");
//     const p = document.createElement("p");
//     const pText = document.createTextNode(facts)

//     p.appendChild(pText)
//     div.append(p);
//     section.appendChild(div);
// }

// displayData()

// QUESTION 29
// Use **async await**, and **the fetch API** to POST some data.
//  * Retrieve the data from a form (you can use new FormData), and send this data to this API : `https://jsonplaceholder.typicode.com/posts`. 
//  * The server will send you back some dummy data that you will display on the DOM.
//  * Use the documentation of the API : https://jsonplaceholder.typicode.com/guide/
//  * Use the fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
//  * Use the new FormData documentation with Object.fromEntries() : https://gomakethings.com/the-object.fromentries-method-in-vanilla-js/

const form = document.forms[0];
form.addEventListener("submit", retrieveData);

function retrieveData(e){
    e.preventDefault()
    const data = new FormData(e.target);
    const details = Object.fromEntries(data.entries());
    console.log(details);

    const info = {
        method: 'POST',
        body : JSON.stringify(details),
        headers: {'Content-type': 'application/json'}
    }

    fetch("https://jsonplaceholder.typicode.com/posts", info)
    .then((res) => res.json())
    .then((resTwo) => {
        console.log(resTwo.title,resTwo.body); 
           displayData(resTwo.title,resTwo.body) //append on the page
    })
    .catch((err) => console.log(err))
}

function displayData(data) {
    const section = document.getElementById("container");
    const p = document.createElement("p");
    const pText = document.createTextNode(data)

    p.appendChild(pText)
    section.appendChild(p);
}
