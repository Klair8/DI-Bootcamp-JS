
const btn = document.querySelector("button");
btn.addEventListener("click", retrieveData);


async function retrieveData(){
    refreshdata()

try{
    const random = getRandomInt (1, 83)
    const response = await fetch(`https://www.swapi.tech/api/people/${random}`)
    if(response.status !== 200){
        throw new Error ("Ohh No !! Something went wrong")
    }
    const data = await response.json();
    if(data.message == 'not found') {
        throw new Error("Ohh No !! Couldnt find the Star Wars Characters");
    }

    const nameChar = data.result.properties.name;
    console.log(data.result.properties.name)

    const height = data.result.properties.height;
    const sentenceHeight = (`Height : ${height}`);
    const gender = data.result.properties.gender;
    const sentenceGender = (`Gender : ${gender}`);
    const year = data.result.properties.birth_year;
    const sentenceYear = (`Birth Year: ${year}`);

    displayData(nameChar)
    displayData(sentenceHeight)
    displayData(sentenceGender)
    displayData(sentenceYear)

    const homeWorld = data.result.properties.homeworld;
    const planet = await retreiveWorld (homeWorld);
    console.log(planet)

    
} catch (err){
    reject("Oupppps we lost you in the Milky Way!!")
}
}


async function retreiveWorld(world){
    const response1 = await fetch(world)
    if(response1.status !== 200){
        throw new Error ("Ohh No !! Something went wrong")
    }
    const dataWorld = await response1.json();
  
    const planet = dataWorld.result.properties.name;
    const sentencePlanet= (`Home Word: ${planet}`);
    console.log(planet)

    displayData(sentencePlanet)
}


function displayData(allData) {
    const divIcon = document.querySelector(".fa-3x");
    divIcon.style.display = "none"
    
    const container = document.getElementById("container");
    const div = document.createElement("div");
    const para = document.createElement("p");
    const text = document.createTextNode(allData);
    para.appendChild(text);
    div.append(para);
    container.appendChild(div);

}


function refreshdata(){
    const e = document.getElementById("container");
    let child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    const divIcon = document.createElement("div");
    divIcon.classList.add('fa-3x');
    const i = document.createElement("i");
    i.classList.add('fa-solid', 'fa-spinner', 'fa-spin-pulse');
    divIcon.appendChild(i);
    e.appendChild(divIcon);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}