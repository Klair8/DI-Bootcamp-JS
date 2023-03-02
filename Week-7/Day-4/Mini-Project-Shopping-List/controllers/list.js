
const  {insertProduct,getAllProducts} = require('../module/list.js'); 

  const _insertProduct=(req,res)=>{   // create the function
        console.log('from the insert f controller', req.body)
        insertProduct(req.body)
        .then(data=>{
            console.log('from controller', data)
            _getAllProducts(req,res); // to get all data calling the function
        })
        .catch(err =>{
            console.log(err);
            res.status(404).json({msg:'error'}) //want that the frontend see the error
        })
    }

    const _getAllProducts =(req,res)=>{   // create the function
    getAllProducts()
    .then(data=>{
        console.log('getallp', data)
        res.json(data)
    })
    .catch(err =>{
        console.log(err)
        res.status(404).json({msg:'error'})
    })
}
    

module.exports ={  // module to export the function
    _getAllProducts,
    _insertProduct
    }

  