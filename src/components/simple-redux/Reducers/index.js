import { combineReducers } from "redux";
import addReducer from "./addReducer";


export const simpleReducer = combineReducers(
{
         allposts: addReducer
         });
