import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer.ts";
import messagesReducer from "./messagesReducer.ts";
import usersReducer from "./usersReducer.ts";
import authReducer from "./authReducer.ts";
import thunk from 'redux-thunk'
import { appReducer } from "./appReducer.ts";

let reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
