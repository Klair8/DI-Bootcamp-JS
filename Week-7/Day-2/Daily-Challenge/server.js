
const express = require('express');

const app = express(); //initalize 
app.use('/',express.static(__dirname+'/public'));  //to use an html and to get the result from it back to the localhost

app.use(express.urlencoded({extended:true}));  // to append the result of the fomr onto the body of the server
app.use(express.json())

app.listen(3000,() => {
    console.log('run on port 3000')
})

app.get('/aboutMe/:hobby',(req,res) => {  
      const hobby =req.params.hobby; 
    if(isNaN(hobby)){    // not a string
        res.status(200).send(hobby)
    } else{
        res.status(404).json('hobby not found')    
    } 
})


// can write it also like that - prettier
// app.get('/aboutMe/:hobby',(req,res) => {  
//     const hobby =req.params.hobby; 
//   if(isNaN(hobby)){    // not a string
//       return res.status(200).send(hobby)
//   } 
//       res.status(404).json('hobby not found')    
// })


app.get('/pic',(req,res) => {    // route to display the image
        res.sendFile(__dirname+'/public/pic.html')   // send the file register in the public folder now when you wrote in the local only pic you see it too!!
    });
  

    app.post('/formData',(req,res) =>{    // use the form data route to put it in the ction form of the html!!!
        res.json(req.body.email + ' ' +req.body.message)
    })


