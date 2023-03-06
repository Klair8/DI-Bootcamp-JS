import logo from './logo.svg';
import './App.css';
import React from 'react';
import Car from './Components/Car.js'
import Events from './Components/Events.js'
import Phone from './Components/Phone.js'
import Color from './Components/Color';


// exercise 1 part I
function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div className="App">
    <Car info={carinfo} />
    <Events />
    <Phone />
    <Color />
    </div>
  );
}


export default App;
