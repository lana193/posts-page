import { combineReducers } from "redux";  
import { postsReducer } from "../store/domains/posts";
import { commentsReducer } from "../store/domains/comments";
import { usersReducer } from "../store/domains/users";

const rootReducer = combineReducers({
  postsReducer,
  commentsReducer,
  usersReducer
})

export default rootReducer;