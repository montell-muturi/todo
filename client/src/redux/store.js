import { createStore, combineReducers, applyMiddleware } from "redux";
import { authreducer as auth } from "./reducers/authreducer";
import { listreducer as data } from "./reducers/listreducer";
import thunk from "redux-thunk";

const reducers = combineReducers({ auth, data })

const store = createStore(reducers, applyMiddleware(thunk));

export default store;