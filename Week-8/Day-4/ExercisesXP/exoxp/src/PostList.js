import React from 'react'
import post from './data.json'

class Postlist extends React.Component{
    constructor(props){
        super(props);
        console.log('props',props)
    }
    render(){
        console.log(post)
      return(
        post.map((elem)=>(
            <>
            <h1>{elem.title}</h1> 
            <h3>{elem.content}</h3>
            </>
            )
      )
      )}}
    


export default Postlist