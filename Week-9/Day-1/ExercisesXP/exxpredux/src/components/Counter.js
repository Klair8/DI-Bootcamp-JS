import React from 'react'
import {connect} from'react-redux'
import { changeIncreaseCount, changeDecreaseCount } from '../actions'

const Counter =(props)=>{
    return(
        <>
        <h2>Counter</h2>
        <button onClick={props.Increase} placeholder="+">+</button>
        <div>{props.a}</div>
        <button onClick={props.Decrease} placeholder="-">-</button>
        </>
    )
}


const mapStateToProps =(state) =>{
    return{
        a: state.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        Increase:()=> dispatch (changeIncreaseCount()),
        Decrease:()=> dispatch (changeDecreaseCount())
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Counter)