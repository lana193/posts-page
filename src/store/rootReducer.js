import { combineReducers } from 'redux';  
import { postsReducer } from '../store/domains/posts';

const rootReducer = combineReducers({
  postsReducer
})

export default rootReducer;