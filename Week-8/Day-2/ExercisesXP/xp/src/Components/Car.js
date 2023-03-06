import React from 'react'
import Garage from './Garage.js'

//Exercise 1 part i
// const Car = (props) =>{
//     return(
//         <h1>This car is {props.info.model}.</h1>
//     )
// }

// exercise 1 part II

class Car extends React.Component{
    constructor(props){
      super(props);
        this.state ={color:'red'}
    }
  render(){
    let{info} = this.props
    console.log(info)
    return (
        <>
        <h1> The car is {this.state.color} {info.model} </h1>
        <Garage/> 
        </>
    )   
     }
    }



export default Car;