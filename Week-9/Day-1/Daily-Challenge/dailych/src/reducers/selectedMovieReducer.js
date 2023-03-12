
export const selectedMovieReducer = (state = null, action={}) => {
    switch(action.type){   //because we want to see which type is calling the reducer
        case 'MOVIES':
            return { ...state,movies:action.payload}
            default:
            return { ...state }
} 
    }  