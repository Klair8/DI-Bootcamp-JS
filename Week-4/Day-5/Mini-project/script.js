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

    const container = document.getElementById("container");  

    function DisplayRobot(robots){
        robots.forEach((robot)=>{
        const {name,email,image} = robot;

    const card = document.createElement("div")
    const nameP = document.createElement("p")
    nameP.classList.add("nameRob");
    const emailP = document.createElement("p")
    const imageRobot =  document.createElement("img")
    
    const namevalue = document.createTextNode(name)
    const emailvalue = document.createTextNode(email)
    nameP.appendChild(namevalue);
    emailP.appendChild(emailvalue)
    imageRobot.src = image;
    
    card.style.border= "1px solid black";
    card.style.backgroundColor = "rgb(62, 122, 155)";
    card.classList.add("cardRobot");
    card.append(imageRobot,nameP,emailP) //use append only when mutiple value !!!!
    container.appendChild(card)
  
     })
     
    }
    DisplayRobot(robots);
    
       
// Input callback function
const inputRobot = document.getElementById("myInput")
inputRobot.addEventListener("input",robotsSearch)


function robotsSearch(e){
  const value = e.target.value.toLowerCase();
  console.log("valeurecrise",value)

// retrive the robots from the DOM using querySelector!!!!!
  const allRobots = document.querySelectorAll (".cardRobot");
  console.log(allRobots)

  // NOW loop 
  allRobots.forEach(elem => {
    const nameRobot = elem.querySelector(".nameRob").textContent;
    console.log(nameRobot);

    if(!nameRobot.toLowerCase().includes(value)){
      elem.style.display = "none";
    }else{
      elem.style.display = "block"
    }
  })
}



