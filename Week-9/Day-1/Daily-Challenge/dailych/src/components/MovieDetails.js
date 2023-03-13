import { connect } from 'react-redux'
// import { movieSelected } from '../actions '

const MovieDetails = (props) => {
    console.log('moviedetail props',props)
    
  // if (!movieSelected) {
  //   return <div> No movie selected</div>
  // } else{
  return (
    <div style={{display:'inline-block', width:'50%'}}>
    <h2>Movie</h2>
      <p>{props.mdetail.title}</p>
      <p>Release date: {props.mdetail.releaseDate}</p>
      <p>Rating: {props.mdetail.rating}</p>
      </div>
  )
  }


//details is the name of the ACTION
const mapStateToProps = (state) => {
    console.log('statemoviedetail',state)
  return {
    mdetail: state.details_reducer.detail
  }
}


export default connect(mapStateToProps)(MovieDetails)