import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer =({movies}) =>{

  // <img src={movie.Poster} alt={movie.Title} />
  //     <div className="movie-info">
  //       <h3>{movie.Title}</h3>
  //       <span>{movie.Year}</span>
  //     </div>
  //     <Link to={`/movies/${movie.imdbID}`} className="btn"> 
  //       Details
  //     </Link> 


  return (
    <div>
      {movies && movies.map((elem, i)=>{
        return (
          <MovieCard 
            key={i} 
            id={movies[i].id} 
            Title={movies[i].Title} 
            Year={movies[i].Year} />
          )
      })  
      }
    </div>
  );
};




export default MoviesContainer;


