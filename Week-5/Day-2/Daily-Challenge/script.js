// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. 
// This input is used to fetch gif depending on a specific category.

// In the JS file, create a program to fetch one random gif depending on the search of the user 
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

// The gif should be appended with a DELETE button next to it. 

// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

let xhr = new XMLHttpRequest();

const input = document.querySelector("input");
input.addEventListener("input", searchValue);

const button = document.querySelector("button");
button.addEventListener("click", deleteGif);


function searchValue(evt) {     // the value of the usere search to collect
    evt.preventDefault();
    getGif();
}


function getGif() {
   //  get request from the API
    xhr.open("GET",  "https://api.giphy.com/v1/gifs/random?tag=" +
    input.value + "&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"); //open the request
 
    xhr.send() //request is send

    xhr.onload = function(){   //to fetch the data 
    console.log(xhr)
    if(xhr.status!== 200){
        console.log("error")
    }else{
    const data = JSON.parse(xhr.response); 
    console.log(data);

    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.data.images.downsized_medium.url;  
    //  the way to take the image from the API (1st data is the answer, 
    // the data image is to search inside et the downsied its the size of the image from the url)

    const delBtn = document.createElement('button');
    delBtn.addEventListener('click',onClickDelete);

    div.appendChild(img);
    div.appendChild(delBtn);
    
    document.querySelector('main').appendChild(div);
}
}
}


function onClickDelete(evt) {
    console.log(evt);
    let div;
    if (evt.target.localName == "i")
        div = evt.target.parentElement.parentElement;
    else
        div = evt.target.parentElement;
    div.parentElement.removeChild(div);
}

function deleteGif() {
    const divs = document.querySelectorAll('div');
    divs.forEach( elem => elem.parentElement.removeChild(elem));
} 


