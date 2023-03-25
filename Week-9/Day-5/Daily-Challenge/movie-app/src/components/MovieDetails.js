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
    <div>
      <h1>Movie Details</h1>
    
      <p>ID:{id}</p>
      {movie && (
        <div className='mdetails'>
          <p>{movie.Poster}</p>
        <div className='details'>
          <h2>{movie.Title}</h2>
          <p>{movie.Genre}</p>
          <p>{movie.Released}</p>
          <p>{movie.imdbRating}</p>
          <p>{movie.Director}</p>
          <p>{movie.Writers}</p>
        </div>
        <div className='plot'>
          <p>{movie.Plot}</p>
        </div>
        </div>
      )}
    </div>
  );
};



export default MovieDetails;


