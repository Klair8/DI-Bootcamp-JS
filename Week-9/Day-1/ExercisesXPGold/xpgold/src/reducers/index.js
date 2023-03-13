import {combineReducers} from 'redux'
import articleReducer from './articleReducer'
import searchReducer from './searchReducer'

const SearchArticle = combineReducers({
    articleReducer,
    searchReducer
  })

  export default SearchArticle