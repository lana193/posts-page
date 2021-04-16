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

const createPost = (data) => ({
    type: actionTypes.CREATE_POST,
    payload: data
})

export const handleCreatePost = (data) => {
    return async(dispatch) => {
        await dispatch(createPost(data));
    }
};

const editPost = (postId, data) => ({
    type: actionTypes.EDIT_POST,
    payload: {
        postId,
        data
    }
})

export const handleEditPost = (postId, data) => {
    return async(dispatch) => {
        await dispatch(editPost(postId, data));
    }
};

const deletePost = (postId) => ({
    type: actionTypes.DELETE_POST,
    payload: postId
})

export const handleDeletePost = (postId) => {
    return async(dispatch) => {
        await dispatch(deletePost(postId))
    }
};
