//Exercise 1
// Analyze the code below. What will be the output?

//  const person = {
//      name: 'John Doe',
//      age: 25,
//     location: {
//          country: 'Canada',
//          city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
//  }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// ==> `I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`


// 🌟 Exercise 2: Display Student Info
// Instructions
// Using the code above, destructure the parameter inside the function 
// and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

function displayStudentInfo({first,last}){
    console.log(`Your full name is ${first} ${last}`)
}
displayStudentInfo({first: 'Elie', last:'Schoppik'});


//  🌟 Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

//  Using methods taught in class, turn the users object into an array:
//  Excepted output: 
//  [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//  FYI : The number is their ID number.

//  Modify the outcome of part 1, by multipling the user’s ID by 2.
//  Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 }
let result = Object.entries(users);
console.log(result);

for (let [key, value] of Object.entries(users)) {
    console.log(`${key}: ${value*2}`);
  }



// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?

  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);

//  ..why an object ??

// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
    constructor(name) {
      this.name = name;
    }
  };

// //   Analyze the options below. 
// //   Which constructor will successfully extend the Dog class?

//  // 1
//  class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };

// //    Not calling the super class constructor 

    // 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

// ==> this one will succced :  super class constructor is call and  pass in the name parameter

//     // 3
// class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };

// //  Not super class constructor is call BUT its not passing the name parameter

//     // 4
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };

//  Not calling the super class constructor 

// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2]  
// {} === {}
// the array one is the true 

// What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
// = 4 :  object 2 is egale to object1 BUT object1 number who had a value of 5  was change to a value of 4
console.log(object3.number)
//  also 4  : object 3 is egale to 2 so also the smae idea
console.log(object4.number)
//  its 5 ; object 4 add a value of 5

// Create a class Animal with the attributes name, type and color. 
// The type is the animal type, for example: dog, cat, dolphin ect …

class animal {
    constructor(name, type,color){
    this.name = name;
    this.type = type;
    this.color = color;
    }
}

// Create a class Mamal that extends from the Animal class. 
// Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, 
// and returns the details of the animal (name, type and color) as well as the sound it makes.
// Create a farmerCow object that is an instance of the class Mamal. 
// The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

class Mamal extends animal {
    constructor(name, type, color, sound ){
    super(name,type,color);
    this.farmercow = sound;
}
sound(){
    console.log(`${this.farmercow} I am a ${this.type} name ${this.name} and I am ${this.color} `);
}

}

const mamal1 = new Mamal("Jon Snow", "dog", "white", "mooo");
mamal1.sound();



