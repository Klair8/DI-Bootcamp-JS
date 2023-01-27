
let bottle = 0;

function playAsong(){
 const userAnswer = Number(prompt("Please enter a number between 1 and 100"));          
        if  (userAnswer > 100 && userAnswer ===0 ){
                 alert("Please enter a number between 1 and 100");
        } else {
        const userAnswer = Number(prompt("Please enter a number between 1 and 100"));
        typeof userAnswer === "Number";    
        checkUser(userAnswer);     
}
}

playAsong();


function checkUser(userAnswer) {
do{                                                                                                                     
        console.log(`${userAnswer} bottles of beer on the wall`);
        console.log(`${userAnswer} bottles of beer`);
      
        if(bottle+1 >1) {
        console.log(`Take ${bottle+1} down, pass them around`);
        bottle++;  }
        else {
        console.log(`Take ${bottle+1} down, pass it around`);
        bottle++;    
        }
        
        console.log(`${userAnswer-=bottle} bottles of beer on the wall`)      
}
while (userAnswer >=0 & bottle >=0){
}
}
checkUser();