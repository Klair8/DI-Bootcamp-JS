const buttonFetch = document.querySelector("#fetch");
buttonFetch.addEventListener("click", getData);

async function getData(){
    refreshdataImg()
    refreshdata()
    getAction()
    try{
    const random = getRandomInt (1, 100)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    console.log(response)
        if (response.status !==200){
        throw new Error ("Ohh No !! Something went wrong")
        }
    const data = await response.json();
    console.log(data)
        if(data.message == 'not found') {
        throw new Error("Ohh No !! Couldnt find the Pokemon Characters");
        }

        const pokemonImg = data.sprites.front_shiny
        console.log(pokemonImg)

        const pokemonName = data.name
        console.log(pokemonName)

        const pokemonId = data.id
        const sentenceId = `ID:  ${pokemonId}`
        console.log("id:",sentenceId)

        const pokemonType = data.types[0].type.name
        const sentenceType = `Type:  ${pokemonType}`
        console.log("type:",sentenceType)

        const pokemonHeight = data.height
        const sentenceHeight = `Height:  ${pokemonHeight}`
        console.log("height:",sentenceHeight)

        const pokemonWeight = data.weight
        const sentenceWeight = `Weight:  ${pokemonWeight}`
        console.log("weight:",sentenceWeight)

        displayDataImg(pokemonImg)
        displayDataN(pokemonName)
        displayData(sentenceId)
        displayData(sentenceType)
        displayData(sentenceHeight)
        displayData(sentenceWeight)


    } catch (err){
        reject("Oupppps we lost you!!")
    }
}


getData()

function displayData(allDatas){
   
    const divIcon = document.querySelector(".fa-3x");
    divIcon.style.display = "none"

    const container = document.getElementById("container");
    const sentence = document.createElement("p");
    const text = document.createTextNode(allDatas);
    sentence.appendChild(text);
    container.append(sentence);
}

function displayDataN(pokemonName){
  
    const container = document.getElementById("container");
    const sentenceName = document.createElement("h3");
    const text = document.createTextNode(pokemonName.toUpperCase());
    sentenceName.appendChild(text);
    container.append(sentenceName);
}

function displayDataImg(pokemonImg){
  
    const image = document.getElementById("image"); 
    const img = document.createElement("img");
    img.src = `${pokemonImg}`;
    image.appendChild(img);
    img.style.width ="250px";
    img.style.height="250px" ;  
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

function refreshdataImg(){
    const e = document.getElementById("image");
    let child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// console.log(fetch("https://pokeapi.co/api/v2/"))

// const buttonForward = document.querySelector("#forward");
// buttonForward.addEventListener("click", getAction);

// async function getAction(){
//     try{
//     const response = await fetch("https://pokeapi.co/api/v2/pokedex/")
//     console.log(response)
//         if (response.status !==200){
//         throw new Error ("Ohh No !! Something went wrong")
//         }
//     const data = await response.json();
//     console.log(data)
//         if(data.message == 'not found') {
//         throw new Error("Ohh No !! Couldnt find the Pokemon Characters");
//         }
//         const forward = data.next
//         console.log(forward)

//     } catch (err){
//         reject("Oupppps we lost you!!")
//     }
// }

// getAction()