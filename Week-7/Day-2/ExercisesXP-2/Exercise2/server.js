
const express = require('express');
const app = express(); //

// app.use('/',express.static(__dirname+'/public'));  

app.listen(3000,() => {
    console.log('Server running on port 3000')
})

app.get('/exercise/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
}) 

