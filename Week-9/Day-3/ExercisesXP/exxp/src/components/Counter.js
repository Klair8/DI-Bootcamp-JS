import React from 'react'
import {connect} from 'react-redux'
import {changeDecrement, changeIncrement} from '../reducers/actions'

class Counter extends React.Component{
        constructor(props){
            super(props)
            this.state ={
                count:""
            }
        }
        
        IncrementOdd =()=>{
            if(this.props.count % 2 !==0){
                this.props.handleIncrement()
             }       
        }

        incrementasync =() =>{
            setTimeout(()=>{this.props.handleIncrement()}, 1000)
        }



        render(){
            console.log(this.props)
            return(
                <div>
            <p>Click :{this.props.count} times </p>
            <button onClick={this.props.handleIncrement}>+</button>
            <button onClick={this.props.handleDecrement}>-</button>
            <button onClick={()=>this.IncrementOdd()}>incrementIfOdd</button>
            <button onClick={()=>this.incrementasync()}>incrementasync</button>
            </div>

            )
        }
    }
        

        const mapStateToProps =(state)=>{
            return{
              count: state.count
          }
        }

        const mapDisptachToProps = (dispatch)=>{
            return{
              handleIncrement: () => dispatch(changeIncrement()),
              handleDecrement: () => dispatch(changeDecrement()),
            }
          }
          

        export default connect(mapStateToProps,mapDisptachToProps)(Counter)
