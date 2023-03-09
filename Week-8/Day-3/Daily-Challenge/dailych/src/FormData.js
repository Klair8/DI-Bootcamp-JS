import React from 'react'

class FormData extends React.Component{
    constructor(props){
      super(props)
      this.state ={
        firstname:'',
        lastname:'',
        age :'',
        gender:'',
        destination:'',
        dietary:'',
        response:''
      }
    }

  
      handleSubmit =(e) => {
      e.preventDefault();
      this.setState({response: {firstname: this.state.firstname,lastname:this.state.lastname,age:this.state.age,gender:this.state.gender,destination:this.state.destination,dietary:this.state.dietary}})
      console.log(this.state.response)    
    }
    

      
      handleChange = (e) =>{
        // console.log(e.target)
         let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        // console.log(e.target.value)  //bring the value
        this.setState({[e.target.name]:value}) 
      }
  
    render(){
      console.log(this.state.response)  
    return (
      <>
      <div>
        <h1>Sample Form</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="firstname" name="firstname" onChange={this.handleChange}/> <br/>
        <input type="text" placeholder="lastname" name="lastname" onChange={this.handleChange}/>  <br/>
        <input type="text" placeholder='age' name='age' onChange={this.handleChange}/> 
        <br/>
        <p>Select Your Destination</p>
        <input type="radio" name="gender" value='Male' onChange={this.handleChange}/> Male <br/>
        <input type="radio" name="gender" value='Female' onChange={this.handleChange}/> Female<br/>
        <br/>
        <select name="destination" onChange={this.handleChange}><br/>
          <option value=''>Please Select</option>
          <option value='France'> France</option>
          <option value='Spain'> Spain</option>
          <option value='Italy'> Italy</option>
        </select><br/><br/>
        <input type="checkbox" name="dietary" value="Nuts Free" onChange={this.handleChange}/> Nuts Free <br/>
        <input type="checkbox" name="dietary" value="Lactose Free" onChange={this.handleChange}/> LactoseFree <br/>
        <input type="checkbox" name="dietary"value="Vegan" onChange={this.handleChange}/> Vegan <br/>
        <br/>
        <input type='submit' value="submit"/>
        </form>
      </div>
      <div>
        <h1>Entered Form</h1>
        <p> Your name:{this.state.response.firstname}{this.state.response.lastname}</p>
        <p> Your age:{this.state.response.age}</p>
        <p> Your gender:{this.state.response.gender}</p>
        <p> Your destination:{this.state.response.destination}</p>
        <p> Your dietary restrictions:{this.state.response.dietary}</p>
        {/* <p> **Nuts free :</p>
        <p> **Lactose free :</p>
        <p> **Vegan meal :</p>   */}
      </div>
  
     </>
    );
    }
  }

  export default FormData