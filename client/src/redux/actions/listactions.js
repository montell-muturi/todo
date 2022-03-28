export const fetchLists = (id) => (dispatch) => {
    dispatch({
        type: "LIST_WAITING",
        payload: null
    });
    fetch(`http://localhost:5000/lists?userId=${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(async (res) => {
        let result = await res.json();
        dispatch({
            type: "FETCH_LISTS",
            payload: result
        });
    }
    ).catch((err) => dispatch({
        type: "LIST_FAIL",
        payload: null
    }));
};

export const createList = (lists, id, title) => (dispatch) => {
    dispatch({
        type: "LIST_WAITING",
        payload: null
    });
    fetch("http://localhost:5000/lists", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId: id, title: title })
    }).then(async (res) => {
        let result = await res.json();
        lists.push(result);
        dispatch({
            type: "CREATE_LIST",
            payload: lists
        });
    }
    ).catch((err) => dispatch({
        type: "LIST_FAIL",
        payload: null
    }));
};

export const createListItem = (lists, listIndex, listId, title) => (dispatch) => {
    dispatch({
        type: "LIST_WAITING",
        payload: null
    });
    fetch("http://localhost:5000/lists/items", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ listId: listId, title: title })
    }).then(async (res) => {
        let result = await res.json();
        lists[listIndex] = result;
        dispatch({
            type: "CREATE_LIST_ITEM",
            payload: lists
        });
    }
    ).catch((err) => dispatch({
        type: "LIST_FAIL",
        payload: null
    }));
};

export const updateList = (lists, listIndex, listId, title) => (dispatch) => {
    dispatch({
        type: "LIST_WAITING",
        payload: null
    });
    fetch("http://localhost:5000/lists", {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            listId: listId,
            title: title
        })
    }).then(async (res) => {
        let result = await res.json();
        lists[listIndex] = result;
        dispatch({
            type: "UPDATE_LIST_ITEM",
            payload: lists
        });
    }
    ).catch((err) => dispatch({
        type: "LIST_FAIL",
        payload: null
    }));
};

export const updateListItem = (lists, listIndex, listId, itemId, data) => (dispatch) => {
    dispatch({
        type: "LIST_WAITING",
        payload: null
    });
    fetch("http://localhost:5000/lists/items", {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            listId: listId,
            itemId: itemId,
            ...data
        })
    }).then(async (res) => {
        let result = await res.json();
        lists[listIndex] = result;
        dispatch({
            type: "UPDATE_LIST_ITEM",
            payload: lists
        });
    }
    ).catch((err) => dispatch({
        type: "LIST_FAIL",
        payload: null
    }));
};

export const deleteList = (lists, listId, listIndex) => (dispatch) => {
    dispatch({
        type: "LIST_WAITING",
        payload: null
    });
    fetch("http://localhost:5000/lists", {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ listId: listId })
    }).then(async (res) => {
        lists.splice(listIndex, 1);
        dispatch({
            type: "DELETE_LIST",
            payload: lists
        });
    }
    ).catch((err) => dispatch({
        type: "LIST_FAIL",
        payload: null
    }));
};

export const deleteListItem = (lists, listIndex, listId, itemId) => (dispatch) => {
    fetch("http://localhost:5000/lists/items", {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ listId: listId, itemId: itemId })
    }).then(async (res) => {
        let result = await res.json();
        lists[listIndex] = result;
        dispatch({
            type: "DELETE_LIST_ITEM",
            payload: lists
        });
    }
    ).catch((err) => dispatch({
        type: "LIST_FAIL",
        payload: null
    }));
};