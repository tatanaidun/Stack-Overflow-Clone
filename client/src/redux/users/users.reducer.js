import {
    GET_USERS,
    USER_ERROR
} from "../types";

const initialState = {
    users: [],
    user: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}