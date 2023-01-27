function playTheGame() {
    const confirmMessage =("Click to play the game");
    if (confirm("Click to play the game") == false) {
        alert ("No problem, Goodbye");
    } else {
       let userAnswer = prompt("Please enter a number between 0 and 10");
       typeof userAnswer === "Number";
       checkUser(userAnswer);
    }
}

playTheGame() ;

function checkUser (userAnswer) {
    typeof userAnswer === "Number";
    if (userAnswer>=0 && userAnswer<=10){
        computerNumber = Math.round(Math.random()) * 10;
        console.log(computerNumber);
    } else if  (userAnswer > 10) {
        alert("Sorry it's not a good number, Goodbye");
    } else {
        alert("Sorry Not a number, Goodbye");
        
    }
}

function compareNumbers(userNumber,computerNumber){
if (userNumber = computerNumber){
    alert("winner!")
} else if (userNumber>computerNumber){
    alert("Your number is bigger then the computer's, guess again"); 
    prompt("Please enter a new number");
} else (userNumber<computerNumber)
    alert("Your number is smaller then the computer's, guess again"); 
    prompt("Please enter a new number");
}

compareNumbers();


