import React from 'react'
import {connect} from 'react-redux'
import {changeAgeUp,changeAgeDown} from '../reducers/actions'


class Age extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            age:""
        }
    }
         render(){
            return(
                <div>
                    <span>age {this.props.age}</span><br></br>
                    <button onClick={()=>this.props.handleAgeUp()}>OnAgeUp</button>
                    <button  onClick={()=>this.props.handleAgeDown()}>OnAgeDown</button>
                </div>
            )
         }
}

const mapStateToProps =(state) =>{
    return{
        age: state.age
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        handleAgeUp: () => dispatch(changeAgeUp()),
        handleAgeDown: () => dispatch(changeAgeDown())
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(Age)