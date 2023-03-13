import { connect } from 'react-redux';
import React from 'react'

const App = (props) => {
  console.log('app',props)
  let array = props.articles
  return (
    <div>
    <h2>Search</h2>
    {/* <input type='text' onChange={this.handleChange} placeholder="Search Article" /> */}
    <div>{props.articles}</div>
    {array.map((elem)=>{
      <p>{elem.articles}</p>
    })}
   </div>
  )

}
const mapStateToProps = (state)=>{
  console.log('state',state)
  return{
      articles:state.articleReducer.articles
  }
}

export default connect(mapStateToProps) (App)


// Create the functionality to filter out the articles by searchTerm.
// Display the input and map the articles with an action from a mapStateToProps function.
// Also use a mapDispatchToProps function to dispatch the action.
// Use the connect to wrap the functions with your App.
