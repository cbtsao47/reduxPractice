import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { combineReducers, createStore } from "redux";
function productsReducer(state = [], action) {
  return state;
}
function userReducer(state = "", action) {
  return state;
}
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});
const store = createStore(allReducers, {
  products: [{ name: "iPhone" }],
  user: "Mickey"
});
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
