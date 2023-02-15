
// function makeAllCaps(wordArr){
//     return new Promise(function(resolve, reject) {
//         if (wordArr.every(word => typeof word === 'string')) {
//         let upperCase = wordArr.map(word => word.toUpperCase())
//         resolve(upperCase)
// } else{
//     reject ('error, its not a word')
// }
//     })
// }

// function sortWords(wordArrayU){
//     return new Promise(function(resolve, reject) {
//     if (wordArrayU.length > 4){
//     resolve (wordArrayU.sort()) //alphabetic order ?
// }else{
//     reject ('error, words to small')
// }
// })
// }

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))

// 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


  function toJs(){
    return new Promise (function(resolve, reject){
        let newobjet = JSON.parse(morse)
    if (Object.keys(newobjet).length === 0){
        reject ('error, JS is empty')
    } else {
        resolve
    } 
})      
    }

    function toMorse(morseJS){
        return new Promise (function (resolve, reject){
            let value = prompt('Please enter a sentence').toLowerCase();
            let arr = value.split('')
            let availableC = Object.keys(morseJS)

            if (arr.every(char => availableC.includes(char))) {
                let translatedArr = arr.map(char => morseJS[char])
                resolve(translatedArr)
            }else {
                reject ('error this character doesnt exist')
            }

        })
    }

    function joinWords(morseTranslation){

        const container = document.getElementById('container')
        const div = document.createElement('div')
        const p = document.createElement('p')
        const text = document.createTextNode(morseTranslation.join(' '))
        p.appendChild(text)
        div.appendChild(p)
        container.appendChild(div)
    }

    toJs()
    .then((newobjet) => toMorse(newobjet))
    .then((resOne) => joinWords(resOne))
    .catch((err) => console.log(err))