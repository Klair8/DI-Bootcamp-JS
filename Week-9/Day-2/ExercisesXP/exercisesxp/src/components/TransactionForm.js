import React from 'react'
import { connect } from 'react-redux';
import { changeInsert } from '../actions/transactionActions';
import { changeUpdate } from '../actions/transactionActions';
import { changeUpdate_Index } from '../actions/transactionActions';
import { changeDelete } from '../actions/transactionActions';

class Transaction extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        accountNumber:'', 
        FSC:'' ,
        name:'',
        amount:''
        }
    }

  handleChange=(e)=> {
    e.preventDefault()
    console.log('handlechange',e.target.value)
    const value =  e.target.value
    this.setState({ [e.target.name] : value })
    
  }
   handleSubmit=(e)=> {
    e.preventDefault()
    this.props.push(this.state)
    console.log('handlesubmit',this.state) 
   }

    render (){
        return(
          <div>
            <form action="" onSubmit={this.handleSubmit}>
            <input type='text' name="accountNumber" placeholder="accountNumber" id="" onChange={this.handleChange}/><br/>
            <input type='text' name="FSC" placeholder="FSC"  id="" onChange={this.handleChange}/><br/>
            <input type='text' name="name" placeholder="name" id="" onChange={this.handleChange}/><br/>
            <input type='text' name="amount" placeholder="amount "id="" onChange={this.handleChange}/><br/>
            <input type="submit" value="submit"/>
            </form>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
  return{
    list : state.list,
    index: state.currentIndex
  }
}

const mapDisptachToProps = (dispatch)=>{
  return{
    push : (e) => dispatch(changeInsert(e)),
    changeUpdate: () => dispatch(changeUpdate()),
    update_all :() => dispatch(changeUpdate_Index()),
    changeDelete:() => dispatch(changeDelete())
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(Transaction)