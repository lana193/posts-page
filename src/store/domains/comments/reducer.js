import actionTypes from "./actionTypes";

const initialStateComments = {
    comments: []
}

export const commentsReducer = (state = initialStateComments, action = {}) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS_FULFILLED:
            const key = "id"
            const allComments = [...state.comments, ...action.payload.data]
            const uniqueComments = [...new Map(allComments.map(item =>
                [item[key], item])).values()];
            return { ...state, comments: uniqueComments };
        default:
            return state;
    }
}