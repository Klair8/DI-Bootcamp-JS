// // Create a variable called sentence. 
// The value of the variable should be a string that contains the words “not” and “bad”.
// // For example, “The movie is not that bad, I like it”.

// // Create a variable called wordNot where it’s value is the first appearance (ie. the position) 
// of the substring “not” (from the sentence variable).

// // Create a variable called wordBad where it’s value is the first appearance (ie. the position) 
// of the substring “bad” (from the sentence variable).

// // If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, 
// then console.log the result.

// // For example, the result here should be : “The movie is good, I like it”

// // If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.



let sentence = ["not","bad"];
console.log(sentence)

let wordNot= sentence[0];
console.log(wordNot)

let wordBad= sentence[1];
console.log(wordBad)

const fullSentence =`The Movie is ${sentence[0]} that ${sentence[1]}, I like it`;
// console.log(fullSentence);

const newSentence = ["The Movie is","[sentence [0]] that [sentence [1]]","I like it"];
// console.log(newSentence);

newSentence[1] = "good"
// console.log(newSentence);


const userAnswer= String(prompt("movie good or bad?"));
console.log(`The user answer is ${userAnswer}`);

if (wordNot < wordBad && wordNot!==-1 && wordBad!==-1)  {
  console.log(newSentence)
} 




// let sentence = "The Movie is not that bad";

// let arrWord =sentence.split(" ");
// console.log(arrWord);

// let positionOfBad = arrWord.indexOf("bad");


// arrWord.splice (positionOfBad,1, "good");

// let newSentence = arrWord.join(" ");

// console.log(newSentence);

// // const wordNot = sentence.indexOf("not");
// // const wordBad = sentence.indexOf("bad");

// // if (wordNot < wordBad && wordNot!==-1 && wordBad!==-1) {
// //   console.log(newSentence)
// // } 
