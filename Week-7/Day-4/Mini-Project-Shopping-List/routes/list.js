const express = require('express');

const  {_getAllProducts,_insertProduct} = require('../controllers/list.js'); 

const router = express.Router()   // creation of our router 

 
router.post('/', _insertProduct); // post to insert !!
router.get('/', _getAllProducts)

module.exports = router  // router to export 
   
    