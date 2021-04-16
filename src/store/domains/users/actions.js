import { apiClient } from "../../../services/apiClient";
import actionTypes from "./actionTypes";

const getUsers = () => ({
    type: actionTypes.GET_USERS,
    payload: apiClient.get("users")
})

export const handleGetUsers = () => {
    return async(dispatch) => {
        await dispatch(getUsers());
    }
};
