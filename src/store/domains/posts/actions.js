import { apiClient } from "../../../services/apiClient";
import actionTypes from "./actionTypes";

const getPosts = () => ({
    type: actionTypes.GET_POSTS,
    payload: apiClient.get("posts")
})

export const handleGetPosts = () => {
    return async(dispatch) => {
        await dispatch(getPosts());
    }
};

const getPost = (postId) => ({
    type: actionTypes.GET_POST,
    payload: apiClient.get(`posts/${postId}`)
})

export const handleGetPost = (postId) => {
    return async(dispatch) => {
        await dispatch(getPost(postId));
    }
};
