
// Exercise 1
// Create a program to retrieve the data from the API URL provided above.
//  Use XMLHttpRequest object to make an AJAX request to the Giphy API 
// and console.log the Javascript Object.


// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
// xhr.send();

// xhr.onload = function(){
//     console.log(xhr)
//     if(xhr.status!== 200){
//         console.log("error")
//     }else{
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// }
// }

// xhr.onprogress = function (event) {
// let percentComplete = parseInt((event.loaded / event.total) * 100);
// console.log("Upload: " + percentComplete + "% complete")
// }

// xhr.onerror = function (){
// console.log("error on error");
// }


// 🌟 Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, 
// retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.send();

xhr.onload = function(){
    console.log(xhr)
    if(xhr.status!== 200){
        console.log("error")
    }else{
    const data = JSON.parse(xhr.response);
    console.log(data);
}
}


