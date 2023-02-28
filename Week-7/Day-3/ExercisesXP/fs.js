const fs = require('fs')

// fs.readFile('text.txt','utf-8',(err,data)=>{
//     console.log(data)
// })


// const data = "this is my exercise XP file";  

// fs.writeFile('hello',data,'utf-8', (err)=>{
//     if(err)
//     console.log(err)
//     else 
//     console.log('file created')
// })

// const datatwo = " this is my files to add on the XP file "; 

// fs.appendFile('hello',datatwo,'utf-8', (err)=>{
//     if(err)
//     console.log(err)
//     else 
//     console.log('file append')
// })

fs.unlink('hello', (err)=>{
    if(err)
    console.log(err)
    else 
    console.log('delete files')
})
