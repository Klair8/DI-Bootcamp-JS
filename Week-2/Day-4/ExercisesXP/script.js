// // // // Exercise 1 : Information

// // // // Part I : function with no parameters
// // // // Create a function called infoAboutMe() that takes no parameter.
// // // // The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// // // // Call the function.

function infoAboutMe(){
    const name ="Claire";
    const age ="40";
    const hobbie = "read";
    console.log (`${name} ${age} ${hobbie}`);
}

// infoAboutMe();

// // // // Part II : function with three parameters

// // // // Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) 
// // // // that takes 3 parameters.
// // // //  The function should console.log a sentence about the person (ie. “You name is …, you are .. 
// // // // years old, your favorite color is …”)
// // // //  Call the function twice with the following arguments:
// // // //  infoAboutPerson("David", 45, "blue")
// // // //  infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName},
     you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


// // // // Exercise 2 : Tips

// // // // John created a simple tip calculator to help calculate how much to tip when he and his family
// // // //  go to restaurants.
// // // // Create a function named calculateTip() that takes no parameter.
// // // // Inside the function, use prompt to ask John for the amount of the bill.
// // // // Here are the rules
// // // // If the bill is less than $50, tip 20%.
// // // // If the bill is between $50 and $200, tip 15%.
// // // // If the bill is more than $200, tip 10%.
// // // // Console.log the tip amount and the final bill (bill + tip).
// // // // Call the calculateTip() function.


function calculateTip(){
    const userAnswer = (prompt(" John what is the amount of the bill."))
        if (userAnswer <= 50){
        console.log(`the tip will be 20%, the final bill will be ${userAnswer}+20%`);
        }else if (userAnswer > 50 && userAnswer<=200){
        console.log(`the tip will be 15%, the final bill will be ${userAnswer}+15%`);
        }else if (userAnswer > 200){
    console.log(`the tip will be 10%, the final bill will be ${userAnswer}+10%`);
    }
}

calculateTip();

// // // Exercise 3 : Find The Numbers Divisible By 23
// // // Create a function call isDivisible() that takes no parameter.
// // // In the function, loop through numbers 0 to 500.
// // // Console.log all the numbers divisible by 23.
// // // At the end, console.log the sum of all numbers that are divisible by 23.

function isDivisible(divisor){
    let sum = 0;
        for (let i = 0; i <= 500; i++){
            if(i%23 === 0) {
                console.log(`The number ${i} divisible by 23`);   
                sum+=i;
                console.log(`${sum}`);
            }  
        }   
    }
    
    isDivisible(3);
    isDivisible(45);


//     //  Exercise 4 : Shopping List

//     // Create an array called shoppingList with the following items : “banana”, “orange”, and “apple”. 
//     // It means that you have 1 banana, 1 orange and 1 apple in your cart.
    
//     // Create a function called myBill() that takes no parameters.
    
//     // The function should return the total price of your shoppingList. 
//     // In order to do this you must follow these rules:
//     // The item must be in stock. (Hint : check out if .. in)
//     // If the item is in stock find out the price in the prices object.
    
//     // Call the myBill() function.
    
//     // Bonus: If the item is in stock, decrease the item’s stock by 1

    const stock = { 
        "banana": 6, 
        "apple": 0,
        "pear": 12,
        "orange": 32,
        "blueberry":1
    }  
    
    const prices = {    
        "banana": 4, 
        "apple": 2, 
        "pear": 1,
        "orange": 1.5,
        "blueberry":10
    } 

    const shoppingList =["banana","orange","apple"];
    
    function myBill(){
        let total = 0;
            for (let i = 0; i < shoppingList.length; i++){
                const item = shoppingList[i];
                if(item in stock){
                    if (stock[item] > 0){
                        total += prices[item];   
                    } else {
                        console.log(`${item} is out of stock`);
                    } 
                }else {
                        console.log(`${item} is not a valid item`);
                    }
                }
               return total    
            }
    
    console.log("total:" + myBill());

    
// // Exercise 5 : What’s In My Wallet ?

// // Create a function named changeEnough(itemPrice, amountOfChange) 
// // that receives two arguments :
// // an item price
// // and an array representing the amount of change in your pocket.

// // In the function, determine whether or not you can afford the item.
// // If the sum of the change is bigger or equal than the item’s price
// //  (ie. it means that you can afford the item),
// //   the function should return true
// // If the sum of the change is smaller than the item’s price 
// // (ie. it means that you cannot afford the item) 
// // the function should return false


// // function changeEnough(itemPrice,amountOfChange){
// // const totalChange = [25, 20, 5, 0];


// // console.log(changeEnough([25, 20, 5, 0]));

function changeEnough(itemPrice,amountOfChange) {
    const ourArray = [25, 20, 5, 0];
    let sum = 0;
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
   console.log(sum);
    if(itemPrice>=sum){
        console.log("true")
    } else{
        console.log("false")
    }
  }
 changeEnough(4.35,[25, 20, 5, 0]);

// Exercise 6 : Vacations Costs
// Let’s create functions that calculate your vacation’s costs:
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
  
function hotelCost(){
    let priceNight = 140;
    let userAnswer =prompt(" How many night will be your stay?");
    typeof userAnswer === "Number";
    if (userAnswer>=1){
        console.log(`Mazal Tov the price of your stay will be ${priceNight*userAnswer}$`);
        return priceNight*userAnswer;
       } else {
        console.log("Please let us know how many night will you stay");
        }
}

hotelCost();


//   Define a function called planeRideCost().
//   It should ask the user for their destination.
//   If the user doesn’t answer or if the answer is not a string, ask again.
//   The function should return a different price depending on the location.
//   “London”: 183$
//   “Paris” : 220$
//   All other destination : 300$

function planeRideCost(){
    let answer= prompt(" What is your destination");
    let pPrice = 220;
    let lPrice = 183;
    let oPrice = 300;
    typeof answer === "string";

    if (answer=="london"){        
        console.log(`its great , the price for the trip is ${lPrice}$`);
        
    } 
    else if (answer=="paris"){        
        console.log(`its great , the price for the trip is ${pPrice}$`);
        
    } 
    else      
        console.log(`its great , the price for the trip is ${oPrice}$`);
        return oPrice,lPrice,pPrice ;
    } 

planeRideCost();


//  Define a function called rentalCarCost().
//   It should ask the user for the number of days they would like to rent the car.
//   If the user doesn’t answer or if the answer is not a number, ask again.
//   Calculate the cost to rent the car. The car costs $40 everyday.
//   If the user rents a car for more than 10 days, they get a 5% discount.
//   The function should return the total price of the car rental.
 
function rentalCarCost(){
    let rAnswer= prompt(" Hi, How many day do you want to rent the car?");
    let pCar = 40;
    let percent=5;
    typeof rAnswer === "Number";
    if (rAnswer>=1){
        console.log(`The price of your rent will be ${pCar*rAnswer}$`);
        return pCar*rAnswer;
       } else if (rAnswer>10){        
        console.log(`The price of your rent will be ${pCar*rAnswer}$`);
        return (pCar*rAnswer)*0.05;
    } else {
        console.log("Please let us know how many night will you stay");
        }   
}
rentalCarCost();


//   Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//   Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.

//   Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

//   Call the function totalVacationCost(}
//   Bonus: Instead of using a prompt inside the 3 first functions,
//    only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, 
//    accordingly


function totalVacationCost(hotelCost,planeRideCost,rentalCarCost){
    let sum = hotelCost + planeRideCost +rentalCarCost;
    return sum;
  }



totalVacationCost();