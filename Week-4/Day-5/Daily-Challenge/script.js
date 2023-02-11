// Instructions
// Create a function that:takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string 
// is an anagram of the second string.

// Some Help
// What is an anagram?
// An anagram is another word or phrase formed by 
// rearranging letters of the first word or phrase.

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

function anagram (sentence1,sentence2){
    const str1 = sentence1.toLowerCase().split(" ").join("");
    const str2 = sentence2.toLowerCase().split(" ").join("");
    if (str1.length != str2.length) return false;

    const total = {}
    for (const letter of str1){
    total[letter] = total[letter] +1 || 1 
    }

    for (const letter of str2){
        total[letter] = total [letter]-1 ;
    }

    const differences = Object.values(total);
    console.log("differences", differences);

    return differences.every((num)=> num === 0) 
    
 
}

const result1 = anagram("bassa","toujours"); // false
console.log("result1", result1)
const result2 = anagram("bassa","assab"); // true
console.log("result2", result2)


