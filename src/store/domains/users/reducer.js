import actionTypes from "./actionTypes";

const initialStateUsers = {
    users: []
}

export const usersReducer = (state = initialStateUsers, action = {}) => {
    switch (action.type) {
        case actionTypes.GET_USERS_FULFILLED: 
            return {...state, users: action.payload.data};
        default:
            return state;
    }
}