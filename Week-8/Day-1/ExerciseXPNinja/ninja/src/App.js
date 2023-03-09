import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import Contact from './components/Contact'
import Card from './components/Card'

function App() {

  const liste = [
    { 
      image: "icone-de-batiment-bleu.png",
      title : 'About the Company', 
      description: 'Lorem ipsum dolor sit amet, dolore magna aliqua.' ,
    },
   
    {
    image: "symbole-du-monde-bleu.png",  
    title : 'Our Mission', 
    description: 'Lorem ipsum dolor sit amet,  dolore magna aliqua.' ,
    },
 
    {
    image:"symbole-de-la-poignee-de-main-bleue.png",
    title : 'Our Values', 
    description: 'Lorem ipsum dolor sit amet, dolore magna aliqua.' ,
   },
  ]


  return (
    <div className="App">
      <Header />
      <Card liste={liste}/>
      <Contact />
     
    </div>
  );
}

export default App;
