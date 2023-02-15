// Part: I

makeAllCaps(){
return new Promise (function (resolve, reject))



}



//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
.then((arr) => sortWords(arr))  // the result will be the array with uppercase
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
.catch(error => console.log(error))


// Part: II
