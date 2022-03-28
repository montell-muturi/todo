import bcrypt from "bcryptjs";

export const signup = (username, email, password) => (dispatch) => {
    dispatch({
        type: "AUTH_WAITING",
        payload: null
    })
    bcrypt.hash(password, 15, (err, passwordHash) => {
        let data = {
            authType: "signup",
            username: username || "",
            email: email,
            password: passwordHash
        };
        fetch("http://localhost:5000/auth", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let result = await res.json();
            if (result["message"]) return dispatch({
                type: "AUTH_ERROR",
                payload: {
                    message: result["message"]
                }
            });
            dispatch({
                type: "SIGN_UP",
                payload: {
                    id: result["_id"] || null,
                    username: result["username"] || "",
                    email: result["email"] || "",
                    isLoading: false
                }
            });
        }).catch((err) => {
            dispatch({
                type: "AUTH_FAIL",
                payload: null
            })
        });

    });
}

export const login = (email, password) => (dispatch) => {
    let data = {
        authType: "login",
        email: email,
        password: password
    };
    dispatch({
        type: "AUTH_WAITING",
        payload: null
    })
    fetch("http://localhost:5000/auth", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(async (res) => {
        let result = await res.json();
        if (result["message"]) return dispatch({
            type: "AUTH_ERROR",
            payload: {
                message: result["message"]
            }
        });
        dispatch({
            type: "LOG_IN",
            payload: {
                id: result["_id"] || null,
                username: result["username"] || "",
                email: result["email"] || "",
                isLoading: false
            }
        });
    }
    ).catch((err) => {
        dispatch({
            type: "AUTH_FAIL",
            payload: null
        })
    });
}

export const logout = () => (dispatch) => {
    dispatch({
        type: "LOG_OUT",
        payload: null
    })
}

export const deleteUser = (id) => (dispatch) => {
    let data = {
        userId: id,
    };
    dispatch({
        type: "AUTH_WAITING",
        payload: null
    })
    fetch("http://localhost:5000/auth", {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(async (res) => {
        dispatch({
            type: "DELETE_USER",
            payload: null
        });
    }
    ).catch((err) => {
        dispatch({
            type: "AUTH_FAIL",
            payload: null
        })
    });
}