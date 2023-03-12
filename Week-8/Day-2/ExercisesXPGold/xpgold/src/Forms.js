import React from 'react'

class Forms extends React.Component{
    constructor(){
        super()
        this.state ={
            username:'',
            age:'',
            errormessage:''
        }
    }
 
    // handleChange =(e)=>{   // Part1
    //     e.preventDefault ();
    //  this.setState({username: e.target.value})
    // }

    handleChange =(e)=>{
        e.preventDefault ();
     this.setState({[e.target.name]: e.target.value})  // name of the input field that triggered the event
    }

    mySubmitHandler=(e)=>{
        e.preventDefault ();
        alert(`your are submitting ${this.state.username} ${this.state.age}`)
    }

    render(){
     let header = this.state.username ? `Hello ${this.state.username} ${this.state.age}` : ' Bye World'

        return(
            <div>
                {/* <h2>Hello {this.state.username}</h2>  */}  
                <h2> {header}</h2>
                <label>Enter your name:</label><br/><br/>
                <input type='text' name='username' placeholder="Username" onChange={this.handleChange}/>
                <br/><br/>
                <label>Enter your age:</label><br/><br/>
                <input type='number' name='age' onChange={this.handleChange} />
                <button name="submit" onSubmit={this.mySubmitHandler}> Submit </button>
            </div>
        )
    }
}

export default Forms;