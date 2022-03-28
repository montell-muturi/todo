const INITIAL_STATE = {
    lists: [],
    isLoading: false,
    error: null
};

export const listreducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LIST_WAITING":
            return Object.assign({}, state, { isLoading: true })
        case "LIST_FAIL":
            return Object.assign({}, state, { isLoading: false, error: "Please try again shortly" })
        case "FETCH_LISTS":
            return Object.assign({}, state, { lists: Object.values(action.payload), isLoading: false })
        case "CREATE_LIST":
            return Object.assign({}, state, { lists: Object.values(action.payload), isLoading: false })
        case "CREATE_LIST_ITEM":
            return Object.assign({}, state, { lists: Object.values(action.payload), isLoading: false })
        case "UPDATE_LIST":
            return Object.assign({}, state, { lists: Object.values(action.payload), isLoading: false })
        case "UPDATE_LIST_ITEM":
            return Object.assign({}, state, { lists: Object.values(action.payload), isLoading: false })
        case "DELETE_LIST":
            return Object.assign({}, state, { lists: Object.values(action.payload), isLoading: false })
        case "DELETE_LIST_ITEM":
            return Object.assign({}, state, { lists: Object.values(action.payload), isLoading: false })
        case "EMPTY_DATA":
            return state
        default:
            return state;
    }
}