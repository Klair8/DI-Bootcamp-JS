// Exercise 1 - Dayly Challenge

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0, 1);
fruits.sort();
fruits.push("Kiwi");
fruits.shift("Apples");
fruits.reverse();
console.log(fruits)

// Exercise 2  

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1])