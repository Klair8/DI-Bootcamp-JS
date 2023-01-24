// Exercise 1 : List Of People

// Part I - Review About Arrays

// 1-  Write code to remove “Greg” from the people array.
// 2 - Write code to replace “James” to “Jason”.
// 3 - Write code to add your name to the end of the people array.
// 4- Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// 5 -  Write code to make a copy of the people array using the slice method. 
// The copy should NOT include “Mary” or your name.
// 6 - Write code that gives the index of “Foo”. Why does it return -1 ?
// 7- Create a variable called last which value is the last element of the array.

const people = ["Greg", "Mary", "Devon", "James"];

// 1
people.splice (0,1);
console.log(people);

// 2
people[2]="Jason";
console.log(people);

// 3
people.push("claire");
console.log(people);

// 4
let maryName = people.indexOf("Mary");

// 5
let copyPeople =(people.slice(1))
console.log(copyPeople);

// 6
let foo = people.indexOf("foo");
console.log(foo);
// Why does it return -1 ? Because "foo" doesnt exist in my array

// 7
let last = people[2];
console.log(last);


// Part II - Loops

// 1- Using a loop, iterate through the people array and console.log each person.

// 2 - Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.


// 1 - const people = ["Greg", "Mary", "Devon", "James"];

for(let x =0; x <=people.length ; x++){
    console.log(people[x]);
}

//  2

for(let x =0; x < 4 ; x++){
    
    if (people[x] === "Jason" ){
    break
} 
console.log(people[x]);
}


// Exercise 2 : Your Favorite Colors
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["orange", "white", "green","pink", "blue"];

for(let x = 0; x < 5 ; x++){
    console.log(`My # ${x+1} choice is ${colors[x]}`)
}



// Exercise 3 : Repeat The Question
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


// let userAnswer = prompt("what is the number you are choosing").toLowerCase();

// while (userAnswer <= 10){
//     userAnswer = prompt("what is the number you are choosing").toLowerCase();
// }
// console.log("correct!!")


// Exercise 4
// Console.log the number of floors in the building.
// Console.log how many apartments are on the floors 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
//  If it is, than increase Dan’s rent to 1200.


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building["numberOfFloors"]);

console.log(building["numberOfAptByFloor"]["firstFloor"]);
console.log(building["numberOfAptByFloor"]["thirdFloor"]);

console.log(building["nameOfTenants"][1]);
console.log(building["numberOfRoomsAndRent"]["dan"][0]);


if (building["numberOfRoomsAndRent"]["sarah"][1] +building["numberOfRoomsAndRent"]["david"][1] > building["numberOfRoomsAndRent"]["dan"][1]){
    building["numberOfRoomsAndRent"]["dan"][1] = 1200;
    console.log(building["numberOfRoomsAndRent"]["dan"][1]);
}



// Exercise 5 : Family
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


const family = {
    lastName : "Sacuto",
    members : 4,
    dog: "indi",
}

for (let key in family){
    console.log(key);
    console.log(family[key]);
}

// Exercise 6
// Given the object below and using a for loop, console.log
//  “my name is Rudolf the raindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  for (let key in details){
    console.log(key);
    console.log(details[key]);
}

// Exercise 7
// A group of friends have decided to start a secret society.
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

const secretSociety = names.map((names) => names[0]).join('')
console.log(secretSociety)

