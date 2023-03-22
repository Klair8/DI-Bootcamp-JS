import React from 'react';
// import { useLocation } from 'react-router-dom';
import { useSelector} from 'react-redux'

const MovieDetails = () => {
  // const location = useLocation();
  // const id = location.state.id;

  const movie = useSelector()

  return (
    <div>
      <h1>Movie Details</h1>
    
      <p>ID:{id}</p>
  
    </div>
  );
};

export default MovieDetails;


