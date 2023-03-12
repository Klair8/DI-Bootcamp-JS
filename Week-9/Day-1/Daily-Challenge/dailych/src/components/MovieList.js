
import { render } from '@testing-library/react'
import React from 'react'
import {connect} from'react-redux' // its a function use to connect a react component to the redux store 
import { movieSelected } from '../actions '


const MovieList =(props)=>{
    console.log('movielist',props)
    let array = props.movies
 return(
        <>
        <h2>Movie List</h2>
        {array.map((movie)=>(
            <div key={movie.tittle}>
            <p>{movie.title}</p>
            <button onClick={props.movieSelected}>Details</button>
            </div>
        ))}
        </>
    )
        }

const mapStateToProps = (state)=>{
    console.log('state',state)
    return{
        movies:state.moviesReducer.movies
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        movieSelected: (e) => dispatch(movieSelected(e.target.value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList)