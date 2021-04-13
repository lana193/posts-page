import actionTypes from './actionTypes';

const initialStatePosts = {
    posts: [],
    currentPost: {}
}

export const postsReducer = (state=initialStatePosts, action={}) => {
    switch(action.type) {
        case actionTypes.GET_POSTS_FULFILLED:
            return {...state, posts: action.payload.data};
        case actionTypes.GET_POST_FULFILLED: 
            return {...state, currentPost: action.payload.data};
        default: 
            return state;
    }
}