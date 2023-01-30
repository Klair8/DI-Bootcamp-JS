const solarSystem = [
    {
        planetName :"Mercury",
        moon:1,
     },
     {
        planetName :"Jupiter",
        moon:3,
     }, 
     {
        planetName :"Saturne",
        moon:3,
     }, 
     {
        planetName :"Earth",
        moon:7,
     }, 
     {
        planetName :"Venus",
        moon:2,
     }, 
     {
        planetName :"Pluton",
        moon:9,
     }, 
    
];

function adPlanets(){
    const sectionPlanets = document.querySelector(".listPlanets");
    for (let planet of solarSystem){
    const planetDiv = document.createElement("div");
    const content = document.createTextNode(planet["planetName"]);
    const classEachPlanet = planet["planetName"].toLowerCase();
    planetDiv.classList.add("planet",classEachPlanet);
    planetDiv.appendChild(content);
    sectionPlanets.appendChild(planetDiv);

    for ( let i = 1; i<=planet["moon"]; i++){
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");
    planetDiv.appendChild(moonDiv);
    sectionPlanets.appendChild(planetDiv);
}
}
}
    

adPlanets();

          


    
  


   
 