
const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


    function DisplayRobot(robots){
        robots.forEach((robot)=>{
        const {name,email,image} = robot;

    const container = document.getElementById("container");  
    const card = document.createElement("div")
    const nameP = document.createElement("p")
    const emailP = document.createElement("p")
    const imageRobot =  document.createElement("img")
    
    const namevalue = document.createTextNode(name)
    const emailvalue = document.createTextNode(email)
    nameP.appendChild(namevalue);
    emailP.appendChild(emailvalue)
    imageRobot.src = image;
    
    card.style.border= "2px solid orange";
    card.appendChild(imageRobot,nameP,emailP)
    container.appendChild(card)
    
     })
    }
    DisplayRobot(robots);
    
       
// Input callback function
const myForm = document.forms[0];
myForm.addEventListener("input",robotsSearch)

function robotsSearch(e){
    const value = e.target.value
    const result=[]
    for (let i = 0; i < robots.length; i++) {
        let robotName = robots[i].name
        robotName.includes(value)?  result.push(robots[i].name) :  console.log('2') 
            // robotName.includes(value)?  card.style.display = "block" :   card.style.display = "block" 
    }
    DisplayRobot(robots)
    console.log(result) 
}





//     - transform input and the name of robot to lowercase
//     - includes method to check if it contains the word x.includes("nic")
//     x would be the text contained inside the div
//     - depending on the result, we add to the div
//         - display : none
//         - display : block
 

