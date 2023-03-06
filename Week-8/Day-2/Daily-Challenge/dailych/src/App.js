import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }       
      }

      addingNumber = (lang) =>{ 
      // console.log(lang)
      this.setState({votes:lang.votes++})
     
      }

  render() {
   
    const{languages} = this.state

    return(
      languages.map((items)=>(
      <div>
        <p>{items.votes}{' '}{items.name} {' '}
        <button type='button'
                onClick={()=>this.addingNumber(items)}
                >Click Here
        </button>
        </p>
      </div>
    )))
}     
}


export default App
