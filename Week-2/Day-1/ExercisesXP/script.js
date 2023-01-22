
// Exercise 1 - xp
// Store your favorite food into a variable.
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>


const favoriteFood = "cookies"
const favoriteMeal = "breakfast"

const globalSentence =`I eat ${favoriteFood} at every ${favoriteMeal}`;

console.log(globalSentence)

// Exercise 2 Part I - xp

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const  globalSentenceSeries = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeries[0]} , ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;

console.log(globalSentenceSeries)

// // Exercise 2 Part II - xp

// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


myWatchedSeries[2]= "Friends";
myWatchedSeries.push("ER");
myWatchedSeries.splice(0,0,"kaamelot");
myWatchedSeries.splice(1,1);

console.log(myWatchedSeries[1][2]);

console.log(myWatchedSeries);


//  Exercise 3 : The Temperature Converter
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.

const temperatureC = "20";
const temperatureF = temperatureC/5*9+32;

console.log(temperatureF)


// Exercise 4 : Guess The Answers #1

// For each expression, predict what you think the output will be in a comment (//) without first running the command.

let c;
let a = 34;
let b = 21;
console.log(a+b) //first expression
// Prediction: it will be 55, because a and b are numbers;
// Actual:55;


a = 2;
console.log(a+b) //second expression
// Prediction: it will be 23, because the value of a change to be 2 instead of 34 , so 2+21;
// Actual:23;


// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c?  ==>the value of C is undefined


// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');

// / 75 ==> the two first ar enubmers and the second one is a string so 3+4= 7 to that we add the string 5 = 75

// Exercise 5 : Guess The Answers #2
// For each expression, predict what you think the output will be in a comment (//) without first running the command.


typeof(15)
// Prediction: number
// Actual: number 
console.log(typeof(15))

typeof(5.5)
// // Prediction:/ A number with decimals
// // Actual: number
console.log(typeof(5.5))

typeof(NaN)
// // Prediction: Represents a "Not-a-Number" value
// // Actual: Number
console.log(typeof(NaN))


typeof("hello")
// // Prediction: string
// // Actual: String
console.log(typeof("hello"))

typeof(true)
// // Prediction: boolean
// // Actual: boolean
console.log(typeof(true))

typeof(1 != 2)
// // Prediction: boolean
// // Actual: boolean
console.log(typeof(1 != 2))

"hamburger" + "s"
// // Prediction: string concatenation
// // Actual: hamburgers 
console.log("hamburger" + "s")

"hamburgers" - "s"
// // Prediction:Nan, the - is ocnsidered as a number operator
// // Actual: Nan
console.log("hamburgers" - "s")

 "1" + "3"
// // Prediction: 13 terms 1 + 3 
// // Actual: 13
console.log( "1" + "3")

 "1" - "3"
// // Prediction: arithmetic operators / - operator
// // Actual: -2
console.log("1" - "3")

"johnny" + 5
// // Prediction: a sentence johnny + 5
// // Actual: johny5
console.log("johnny" + 5)

"johnny" - 5
// // Prediction: NaN -it will be NaN, because the - is considered a number operator ;
// // Actual: NaN
console.log("johnny" - 5)

 99 * "hello"
// // Prediction: NaN -it will be NaN, because * is considered as a number operatior;
// // Actual: NaN
console.log( 99 * "hello")

1 != 1
// // Prediction: Not 1
// // Actual: false
console.log(1 != 1)

 1 == "1"
// // Prediction: The "equal to" operator 
// // Actual: true
console.log( 1 == "1")

 1 === "1"
// // Prediction:  3 equals - checking the value & the type,
// // Actual: false
console.log( 1 === "1")


// Exercise 6 : Guess The Answers 

// For each expression, predict what you think the output will be in a comment (//) without first running the command.


5 + "34"
// Prediction: 534 ==> number 5 + the string
// Actual:534


5 - "4"
// Prediction: 1
// Actual:1

10 % 5
// Prediction:The modulus operator (%) returns the division remainder. 
// Actual: 0

5 % 10
// Prediction: The modulus operator (%) returns the division remainder.
// Actual: 5


"Java" + "Script"
// Prediction: 2strings to add together
// Actual:JavaScript

" " + " "
// Prediction: empty because nothing in the string
// Actual:

" " + 0
// Prediction: 0 empty string + 0 
// Actual:0

true + true
// Prediction: true is a boolean so 1+1
// Actual:2

true + false
// Prediction:  true and false are boolean so 1+0
// Actual: 1

false + true
// Prediction: true and false are boolean so 1+0 or 0+1
// Actual:1


false - true
// Prediction: true and false are boolean so 0-1
// Actual:-1

!true
// Prediction: Not true so false
// Actual: false

3 - 4
// Prediction: number operator so 1
// Actual:-1

"Bob" - "bill"
// Prediction: 2 strings but the - number operator isnt working so nomrally Nan
// Actual: Nan
