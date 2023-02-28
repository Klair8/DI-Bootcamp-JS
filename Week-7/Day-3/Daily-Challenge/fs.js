const fs = require('fs') 

// let count = 0
// let position = 0

// fs.readFile('RightLeft.txt','utf-8',(err,data)=>{
//     const dataArray = (data.split(''))
//     if (err) return console.log(err)
//     dataArray.forEach(el => {
//         count ++
//        if (el === '>') {
//         position ++
//        } else if (el ==='<') {
//         position --
//        }
//         console.log(position)
//     })
//    console.log('total step right ', position)
// })

let count = 0
let position = 0

fs.readFile('RightLeft.txt','utf-8',(err,data)=>{
    const dataArray = (data.split(''))
    if (err) return console.log(err)
    for (let i =0 ; i < dataArray.length; i ++){
    count++
       if (dataArray[i] === '>') {
        position ++
       } else if (dataArray[i] ==='<') {
        position --
       }
        if(position == -1 ){
             console.log('number od steps', count)
            break;
       }
    }
})