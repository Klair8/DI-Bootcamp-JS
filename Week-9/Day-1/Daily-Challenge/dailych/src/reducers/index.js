import {combineReducers} from 'redux'
import moviesReducer from './moviesReducer'
import { selectedMovieReducer } from './selectedMovieReducer'

const combine = combineReducers({
    moviesReducer,
    selectedMovieReducer
  })

  export default combine