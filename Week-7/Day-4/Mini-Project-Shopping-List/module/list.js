const  {db} = require('../config/db.js'); 


const insertProduct = (item) =>{   // insert item
    return db('list') // name of the table in elephant sql
    .insert(item)
    .returning('*')
  }

const getAllProducts = () =>{    // get all the items
    return db('list')
    .select('id','name','quantity')
    .orderBy('id')
    .returning('*')
}


module.exports ={  // module to export the query
    getAllProducts,
    insertProduct
    }
  