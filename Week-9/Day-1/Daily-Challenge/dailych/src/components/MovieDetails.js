import React from 'react'
import { connect } from 'react-redux'
import { movieSelected } from '../actions '

const MovieDetails = (props) => {
    console.log('moviedetail props',props)
    
  if (!movieSelected) {
    return <div> No movie selected</div>
  } else{
  return (
    <>
    <h2>Movie</h2>
    <div>
      <p>{movieSelected.title}</p>
      <p>Release date: {movieSelected.releaseDate}</p>
      <p>Rating: {movieSelected.rating}</p>
      </div>
    </>
  )
  }
}

const mapStateToProps = (state) => {
    console.log('statemoviedetail',state)
  return {
    movieSelected: state.moviesReducer.movie
  }
}

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         movieSelected: (e) => dispatch(movieSelected(e.target.value))
//     }
// }


export default connect(mapStateToProps)(MovieDetails)