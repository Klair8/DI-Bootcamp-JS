import React from 'react';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ Title,Year,Poster,id}) => {

  const navigate = useNavigate();

  const handleMovieDetails= (id) => {
    console.log('Clicked the details button');
    navigate('/MovieDetails', { state: { id } });
    console.log('id from moviecard',id)  // working
  };
  
  return(
    <div className='mcard'>
        <img src={Poster} alt={Title} />
            <h3>{Title}</h3><p>{Year}</p>
            <button onClick={() => handleMovieDetails(id)} className="btn"> 
              Details </button>
    </div>
)
};

export default MovieCard;