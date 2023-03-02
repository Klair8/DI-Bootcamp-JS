
    function getAllitems () {
        fetch ('http://localhost:3000/api/list')  // fetch the route from the server
        .then(res=>res.json())
        .then(data=>{
        showItems(data);
         })
        .catch (err =>{
        console.log(err)
         })   
         }

         getAllitems()

    const showItems = (arr)=>{
        const html = arr.map(itemList=>{
            return `<div>${itemList.name} ${itemList.quantity}</div>`
        })
        document.getElementById("root").innerHTML = html.join('')
    }
    
    const addItem =(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;

        fetch('/api/list',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'   
            },
            body: JSON.stringify({name,quantity})
        })
         .then(res=>res.json())
        .then(data=>{
        showItems(data);
         })
        .catch (err =>{
        console.log(err)
         })   
         
    }
    
  