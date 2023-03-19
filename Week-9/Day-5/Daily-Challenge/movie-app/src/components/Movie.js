import React from 'react';
import { connect } from 'react-redux';

const Movie = ({ location, movies }) => {
  const { id } = location.state;
  console.log('idmovie' , id)
  const movie = movies.find(movie => movie.id === id);

  if (!movie) {
    return <div> Movie not found </div>;
  }

  const { Title, Year, Poster } = movie;

  return (
    <div className='mmovies'>
      <img src={Poster} alt={Title} />
      <div className='content'>
        <h1>Movie Details for id: {id}</h1>
        <p>Genre: {movie.Genre}</p>
        <p>Release: {Year}</p>
        <p>Rated: {movie.Rated}</p>
        <p>IMDB Rating: {movie.imdbRating}</p>
        <p>Director: {movie.Director}</p>
        <p>Writer: {movie.Writer}</p>
        <p>Actor: {movie.Actors}</p>
      </div>
      <div className='des'>
        <h3>ABOUT</h3>
        <p>{movie.Plot}</p>
        <button> View on MDB </button>
        <button> Go Back To Search</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Movie);
