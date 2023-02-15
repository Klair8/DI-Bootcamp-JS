// Exercise 1 : Star Wars API
// Instructions
// Part I

const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4',

  ]

// Use Promise.all to fetch all the characters from the array above with only one request.
// Console.log the output and make sure it has a catch block as well.


Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0].result.properties)
    console.log(results[1].result.properties)
    console.log(results[2].result.properties)
      console.log(results[3].result.properties)
}).catch(() => console.log('error'))


// Part II
// Change one of the urls in the array provided above. 
// This should cause an error. Make sure your catch block works.