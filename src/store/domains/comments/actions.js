import { apiClient } from "../../../services/apiClient";
import actionTypes from "./actionTypes";

const getComments = (postId) => ({
    type: actionTypes.GET_COMMENTS,
    payload: apiClient.get(`comments?postId=${postId}`)
})

export const handleGetComments = (postId) => {
    return async(dispatch) => {
        await dispatch(getComments(postId));
    }
};
