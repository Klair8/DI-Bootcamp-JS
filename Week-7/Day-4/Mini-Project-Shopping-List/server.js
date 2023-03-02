const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');

dotenv.config()

const app = express(); //initilaise express
app.use(cors());

app.use(express.urlencoded({extended:true}));  
app.use(express.json())


app.use('/',express.static(__dirname+'/public'));  // add the static in order to see it 

app.listen(process.env.PORT,() => {
    console.log(`run on ${process.env.PORT}`)
})

const list_router = require('./routes/list.js')

app.use('/api/list', list_router)  // using this route for the ftch



