let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, 
// that console.logs the 3 fruits from the groceries object. 
// Use the forEach method.

const displayGroceries = () => {
    Object.values(groceries.fruits).forEach(value => {
   console.log(value)
    })
}
displayGroceries()

// 1/Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. 
// (Tip : make the user variable equal to the client variable)
// 2/Change the client variable to “Betty”.

// Will we also see this modification in the user variable ? Why ?
// ==> yes the let client is in a global scope and its located at the beginning of the script too

// 3/In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$.

//  Will we also see this modification in the shopping object ? Why ?
// Yes we will see the modification because we made shopping and grocerie to get the same value , so same adresse same object 

// Change the value of the payed key to false.

//  Will we also see this modification in the shopping object ? Why ?
// yes we will see the modification also in the shopping list 

// Invoke the cloneGroceries function.

const cloneGroceries = () => {
let user = client
user = "betty"
const shopping = groceries
shopping.totalPrice = $35  
shopping.other.payed = false 
}

cloneGroceries()





