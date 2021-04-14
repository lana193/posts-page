import { combineReducers } from 'redux';  
import { postsReducer } from '../store/domains/posts';
import { commentsReducer } from '../store/domains/comments';

const rootReducer = combineReducers({
  postsReducer,
  commentsReducer
})

export default rootReducer;