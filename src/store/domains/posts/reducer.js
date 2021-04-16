import actionTypes from "./actionTypes";

const initialStatePosts = {
    posts: [],
    currentPost: {}
}

export const postsReducer = (state = initialStatePosts, action = {}) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_FULFILLED: {
            !localStorage.getItem("localPosts") && localStorage.setItem("localPosts", JSON.stringify(action.payload.data))
            const localPosts = JSON.parse(localStorage.getItem("localPosts"))
            return { ...state, posts: localPosts };
        }
        case actionTypes.GET_POST_FULFILLED: {
            return { ...state, currentPost: action.payload.data };
        }
        case actionTypes.DELETE_POST: {
            const localPosts = JSON.parse(localStorage.getItem("localPosts"))
            const filteredPosts = localPosts.filter(item => item.id !== action.payload)
            localStorage.setItem("localPosts", JSON.stringify(filteredPosts))
            return { ...state, posts: filteredPosts }
        }
        case actionTypes.EDIT_POST: {
            const localPosts = JSON.parse(localStorage.getItem("localPosts"))
            const updatedPosts = localPosts.map(item => item.id === action.payload.postId ? {...item, ...action.payload.data} : item)
            localStorage.setItem("localPosts", JSON.stringify(updatedPosts))
            return { ...state, posts: updatedPosts }
        }
        case actionTypes.CREATE_POST: {
            const localPosts = JSON.parse(localStorage.getItem("localPosts"))
            const newPostId = Math.max(...localPosts.map(item => item.id)) + 1
            const newUserId = Math.max(...localPosts.map(item => item.userId)) + 1
            const newPost = {
                userId: newUserId,
                id: newPostId,
                ...action.payload
            }
            const newPosts = [newPost, ...localPosts]
            localStorage.setItem("localPosts", JSON.stringify(newPosts))
            return { ...state, posts: newPosts }
        }
        default:
            return state;
    }
}