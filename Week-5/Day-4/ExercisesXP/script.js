// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

fetch("https://www.swapi.tech/api/starships/9/")
.then(response => response.json())
.then(objectStarWars => console.log(objectStarWars.result));

async function starWars(){
    try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/")
    if(response.status !== 200){
        throw new Error ("error")
    }
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
    } catch (err) {
    console.log("ERROR");
    }
    }

    starWars()

    // Exercise 2: Analyze
    // Instructions

    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }
    
    async function asyncCall() {
        console.log('calling');
        let result = await resolveAfter2Seconds();
        console.log(result);
    }
    
    asyncCall();

    // Analyse the code provided above before executing it -
    //  what will be the outcome?

// first we will see the "calling" and after the function resolveAfter2second  
//  because inside the function asyncCall the console log calling is
//  written before the await method and inside a async function its synchronous

