const INITIAL_STATE = {
    id: null,
    username: "",
    email: "",
    isLoading: false,
    error: null
}

export const authreducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "AUTH_WAITING":
            return Object.assign({}, state, {
                ...state,
                isLoading: true,
                error: null
            });
        case "AUTH_FAIL":
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                error: "There has been an error, please wait and try again."
            });
        case "AUTH_ERROR":
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                error: action.payload.message
            });
        case "LOG_IN":
            return Object.assign({}, state, {
                ...state,
                ...action.payload
            });
        case "SIGN_UP":
            return Object.assign({}, state, {
                ...state,
                ...action.payload
            });
        case "LOG_OUT":
            return Object.assign({}, INITIAL_STATE);
        case "DELETE_USER":
            return Object.assign({}, INITIAL_STATE);
        default:
            return state;
    }
}