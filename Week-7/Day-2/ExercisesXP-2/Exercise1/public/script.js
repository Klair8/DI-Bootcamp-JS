// const { application } = require("express");


const getData =()=>{  
  fetch(`http://localhost:3000`)
  .then (res => res.json())
  .then (data =>{
      displayData(data); // dont forget to call it !!!!
  })
  .catch(err =>{
    console.log(err)
  })
  }
  getData()

const displayData = (arr) =>{
  const html = arr.map(item=>{
    return `<div>${item.firstname} ${item.lastname}</div>`
})
  document.getElementById("root").innerHTML = html.join('');
}


