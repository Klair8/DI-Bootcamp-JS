
// const largeNumber = require('./main.js')
// const b = 5

// const result = largeNumber + b
// console.log(result)

// TERMINAL RESULT
// clairesacuto@Claires-MacBook-Pro Daily-Challenge % node script.js
// 361
// clairesacuto@Claires-MacBook-Pro Daily-Challenge % 


const http = require('http')

// const server = http.createServer((request,response)=>{
//     console.log('hello get your request');
//     console.log(request.method);

//     if(request.url ==='/'){
//         console.log("I'm listening")
//     } 
//     else{
//         response.end('<h1>404 page not found')
//     }
//     })
    
//     server.listen(3000,()=>{
//         console.log("I'm listening")
//     })

    // TERMINAL RESULT 
    // clairesacuto@Claires-MacBook-Pro Day-1 % cd daily-challenge
    // clairesacuto@Claires-MacBook-Pro daily-challenge % ls
    // main.js		script.js
    // clairesacuto@Claires-MacBook-Pro daily-challenge % node script.js
    // I'm listening


    // Set the response header to res.setHeader('Content-Type', 'text/html')
    // (look at this tutorial- Part named “Serving HTML)

    // Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", 
    // and an HTML <h1> saying “Hi there at the frontend”


       
        // const server = http.createServer((req, res) => {
        //     res.setHeader('Content-Type', 'text/html');
        //     res.end(`<p> My module is the result ${result} </p> <h1> Hi there at the frontend</h1>`);
        //   }).listen(3000);
        


        // PART III


        const currentdate = require('./main.js')


        const server = http.createServer((req, res) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(`<p> The date and Time are currently ${currentdate()} </p> `);
          }).listen(8080);


    





   
