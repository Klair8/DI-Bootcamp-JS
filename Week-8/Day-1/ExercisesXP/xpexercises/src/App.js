import logo from './logo.svg';
import './App.css';
import React from 'react';
// import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';


function App() {
  // ex1
  const NoJSKexercise1 = React.createElement('h1', null, 'I do not use JSX!');
  //ex2
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5
  //ex3

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <>
      {NoJSKexercise1}
      <h1>Hello World.</h1>

      {/* exercise2 */}
      {myelement}
      <h2>React is {sum} times better with JSX</h2>

      {/* exercise3 */}
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
      
    {/* <ul>
      <UserFavoriteColors myobj={{user:favAnimals}}/>
    </ul> */}

  <Exercise4/>
    </>
  );
}
export default App;
