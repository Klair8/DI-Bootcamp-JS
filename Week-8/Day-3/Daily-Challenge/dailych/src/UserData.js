import React from 'react'
import FormData from './FormData'

class UserData extends React.Component{
   constructor(props){
    console.log('userdata',props)
    super(props)
   }

   
render(){
    return (
        <>
        <h1>Entered Form</h1>
        <p> Your name:{this.props.firstname}</p>
        <p> Your age:</p>
        <p> Your gender:</p>
        <p> Your destination:</p>
        <p> Your dietary restrictions:</p>
        <p> **Nuts free :</p>
        <p> **Lactose free :</p>
        <p> **Vegan meal :</p>      
        </>

    )
}
}

export default UserData
