import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getFilm} from '../redux/actions'
import { fetchFilms } from '../redux/actions';
import MovieCard from './MovieCard';
import MoviesContainer from './MoviesContainer'


class SearchFilm extends React.Component {
    constructor(props){
     super(props)
     this.state = {
        searchText: "",
      };
     }

     handleSubmit = (e) => {
        e.preventDefault();
        const { fetchFilms } = this.props;   // fetchFilms is the Action
        const searchText = e.target.searchText.value;
        console.log('searchtext',searchText)
        fetchFilms(searchText);
    }
    
    handleChange=(e)=>{
        this.setState({ searchText: e.target.value });
        }

render(){
    console.log('resultrender',this.props.movies)
    const movies = this.props.movies
    console.log('in the render', movies)

    const filteredMovies = movies.filter(movie =>{
        return movie.Title.toLowerCase().includes(this.state.searchText.toLowerCase())
        })
      
    return(
        <div>
            <h1>Search Movies, TV Series...</h1>
            <form onSubmit={this.handleSubmit}>
            <input type='text' name="searchText" onChange={this.handleChange} />   
            <button type="submit">Search</button> 
            </form>
            <MoviesContainer movies={filteredMovies}/>
        </div>
    )
}
}



const mapStateToProps = (state) =>{
     console.log('mapStateToProps',state)  // got the array of the search
    return{
    movies: state.movies
}
}


const mapDispatchToProps = {
    fetchFilms
}

export default connect (mapStateToProps,mapDispatchToProps)(SearchFilm)