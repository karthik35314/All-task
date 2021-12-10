import { combineReducers } from "redux";
import postReducer from "./postReducer";
import getReducer from "./getReducer";
import delReducer from "./delReducer";



export const CrudReducer = combineReducers({
     allUsers:postReducer,
     getusers:getReducer,
     delusers:delReducer
         });

