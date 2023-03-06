import React from 'react'

class Color extends React.Component{
    constructor(){
        super();
        this.state ={
            favoriteColor:'red'
        }
    }


  componentDidMount (){
    setInterval( () => this.setState({favoriteColor : 'yellow'}),5000)
  }

  changeColor = () =>{
    this.setState({favoriteColor:"blue"});
  }

    render(){
        return(
            <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button type='button'
        onClick={this.changeColor}>changeColor</button>
        </div>
    )}
}


export default Color