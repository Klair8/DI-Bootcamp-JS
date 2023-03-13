import{DETAIL} from '../actions '


export const selectedMovieReducer = (state= initialState,action={}) => {
    switch(action.type){   //because we want to see which type is calling the reducer
        case 'DETAIL':
            return { ...state,detail:action.payload}
            default:
            return { ...state }
} 
    }  