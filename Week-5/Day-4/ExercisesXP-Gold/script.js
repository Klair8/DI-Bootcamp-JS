// Exercise 1: Analyze #2
// Instructions

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()

// Analyse the code provided above before executing it
//  - what will be the outcome?
// 1 => ==SEQUENTIAL START==
// 2=> starting slow promise
// 3 : slow promise is done
// 4 : slow
// 5: starting fast promise
// 6: fast promise is done
// 7:  fast

// Exercise 2: Analyze #3
// Instructions

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)

// Analyse the code provided above before executing it 
// - what will be the outcome?

// 1 => '==CONCURRENT START with await=='
// 2=> starting slow promise
// 3 =>starting fast promise
// 3 :fast promise is done
// 4 : slow promise is done
// 5: starting fast promise
// 6: slow
// 7:  fast


// Exercise 3 : Modify Fetch With Async/Await
// Instructions

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

const getData = async function() {
const response = await Promise.all(urls.map(async url  => {
    const resp = await fetch(url);
    return resp.json();
}))
console.log('users', users);
console.log('posta', posts);
console.log('albums', albums);
}
console.log(getData())
// getData()

// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Don’t get discouraged… this is a really tough one…
