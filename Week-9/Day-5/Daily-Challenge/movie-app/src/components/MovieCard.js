import React from 'react';


const MovieCard = ({ Title,Year,Poster }) => {
  return(
    <div>
        <img src={Poster} alt={Title} />
        <div>
            <h2>{Title}</h2>
            <p> {Year}</p>
        </div>
    </div>
)
};

export default MovieCard;