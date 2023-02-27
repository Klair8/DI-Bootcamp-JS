// Exercise 1
// In this file, use http to create a server. 
// You should return at least three different lines of HTML to the browser.
//  (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

const http = require('http')


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1> this is my first-response</h1><br><h2> this is my second-response</h2><br><h3> this is my third-response</h3>`);
}).listen(3000);





