import React from 'react'
import { connect } from 'react-redux';
import { changeInsert } from '../actions/transactionActions';
import { changeUpdate } from '../actions/transactionActions';

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
    console.log('handlechange',e.target.value)
    const value =  e.target.value
    this.setState({ [e.target.name] : value })
    
  }
   handleSubmit=(e)=> {
    e.preventDefault()
    if(this.props.index === -1){
      this.props.handleInsert(this.state)
    }else{
      this.props.handleUpdate(this.state)
    }
    this.setState({
      accountNumber:"", 
      FSC:"",
      name:"",
      amount:""
    })
   }
   componentDidUpdate = (prevProps,prevState)=>{
    if(prevProps.index != this.props.index && this.props.index != -1){
    const trx = this.props.list[this.props.index];
    this.setState({
      accountNumber:trx.accountNumber|| "", 
      FSC:trx.FSC || "",
      name:trx.name || "",
      amount:trx.amount ||""
    })
   }
  }

    render (){
      console.log(this.props)
        return(
          <div>
            <form action="" onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.accountNumber} name="accountNumber" placeholder="accountNumber" id="" onChange={this.handleChange}/><br/>
            <input type='text' value={this.state.FSC} name="FSC" placeholder="FSC"  id="" onChange={this.handleChange}/><br/>
            <input type='text' value={this.state.name} name="name" placeholder="name" id="" onChange={this.handleChange}/><br/>
            <input type='text' value={this.state.amount} name="amount" placeholder="amount "id="" onChange={this.handleChange}/><br/>
            <input type="submit" value={this.props.index===-1 ? 'Submit' : 'Update'}/>
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
    handleInsert: (data) => dispatch(changeInsert(data)),
    handleUpdate: (trx) => dispatch(changeUpdate(trx)),
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(Transaction)