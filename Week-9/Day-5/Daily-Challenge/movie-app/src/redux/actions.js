export const getFilm = (movie_Obj) =>{
        return{
            type:'SEARCH_MOVIE',
            payload: movie_Obj
        }  
}


export const fetchFilms =(text) => (dispatch, getState) =>{
    dispatch( { type: "LOADING" } )
  fetch(`http://www.omdbapi.com/?s=${text}&type=movie&apikey=fbe2eea3`)
      .then(res=>res.json())
      .then(data=>{
        dispatch({
            type:'FETCH_MOVIES',
            payload:data
        })})
}
