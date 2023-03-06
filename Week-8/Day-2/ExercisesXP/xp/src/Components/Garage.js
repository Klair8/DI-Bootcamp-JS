import React from 'react'


class Garage extends React.Component{
    constructor(){
        super()
        this.state={size:"small"}
    }
    render(){
        return<h1> Who lives in my {this.state.size} garage</h1>    
       }
    }
    

export default Garage;