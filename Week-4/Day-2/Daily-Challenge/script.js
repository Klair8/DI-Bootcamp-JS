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
    Object.values(groceries.fruits).forEach(value => console.log(value))
}
displayGroceries()

// 1/Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. 
// (Tip : make the user variable equal to the client variable)
// 2/Change the client variable to “Betty”.

// Will we also see this modification in the user variable ? Why ?
// ==> no its not the same name , because they dont have the same adress as we redefine the name, they point to differents adresses 

// 3/In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$.

//  Will we also see this modification in the shopping object ? Why ?
// Yes we will see the modification because we made shopping and grocerie to get the same value , same reference in the heap

// Change the value of the payed key to false.

//  Will we also see this modification in the shopping object ? Why ?
// yes we will see the modification also in the shopping list 

// Invoke the cloneGroceries function.

const cloneGroceries = () => {
let user = client;
client = "betty";
const shopping = groceries;
groceries.totalPrice = "$35" ; 
groceries.other.payed = "false" ;
}

cloneGroceries()





