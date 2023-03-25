import React from 'react';
import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions';

const MovieDetails = () => {
  const location = useLocation();
  const id = location.state.id;

  const dispatch = useDispatch();

  const movie = useSelector(state => state.movie);
  console.log('moviedetail:', movie)

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);


  return (
    <div className='mdetails'>
      <h1>Movie Details</h1>  
      {movie && (
        <div className='detailsall'>
          <img src={movie.Poster} alt={movie.Title} />
        <ul className='detailstext'>
          <h2>{movie.Title}</h2>
          <li> <strong> Genre : </strong> {movie.Genre}</li>
          <li> <strong> Released: </strong>  {movie.Released}</li>
          <li> <strong> imdbRating: </strong>{movie.imdbRating}</li>
          <li> <strong> Director: </strong> {movie.Director}</li>
          <li> <strong> Writers: </strong>{movie.Writer}</li>
        </ul>
        </div>      
      )}
        {movie && (
        <div className='about'>
          <h3>About</h3>
          <p>{movie.Plot}</p>
          <button href="https://www.imdb.com/title/{movie.imdbID}">View on IMDB</button>
          <button>Back to the search</button>
        </div>
        )}
    </div>
  );
};



export default MovieDetails;


