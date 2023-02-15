// Exercise 1 : Star Wars API
// Instructions
// Part I

const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
  ]

// Use Promise.all to fetch all the characters from 
// the array above with only one request.
// Console.log the output and make sure it 
// has a catch block as well.

// map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all waits until all jobs are resolved

// Promise.all(requests)
// .then(results.forEach(result=>console.log(result)))

Promise.all(urls.map(url => fetch(url)))
.then(result => console.log(result.text())
    Promise.all(results.map(result => console.log(result.text()))))
