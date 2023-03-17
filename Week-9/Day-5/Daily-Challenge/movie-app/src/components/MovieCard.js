import React from 'react';


const MovieCard = ({ Title,Year,Poster }) => {
  return(
    <div style={{border: '2px.solid black'}}>
        <img src={Poster} alt={Title} />
        <div>
            <h2>{Title}</h2>
            <p> {Year}</p>
            {/* <Link to={`/movies/${movie.imdbID}`} className="btn"> 
              Details
            </Link>  */}
        </div>
    </div>
)
};

export default MovieCard;