import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import { authReducer } from "./auth/authReducer";
const reducers = combineReducers({
  auth: authReducer,
});

const customMiddleware = (store) => (next) => (action) => {
  typeof action === "function" ? action(store.dispatch) : next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(customMiddleware));

export const store = createStore(reducers, enhancer);
