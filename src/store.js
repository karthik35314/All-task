
import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CrudReducer } from "./components/Redux-crud/Reducers";
import { simpleReducer } from "./components/simple-redux/Reducers";



const rootReducer = combineReducers({
  CrudReducer,simpleReducer
});
const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk), composeWithDevTools())
);

export default store;