import React from 'react';
import { useLocation } from 'react-router-dom';


const MovieDetails = () => {
  const location = useLocation();
  const id = location.state.id;

  return (
    <div>
      <h1>Movie Details</h1>
    
      <p>ID:{id}</p>
  
    </div>
  );
};

export default MovieDetails;


