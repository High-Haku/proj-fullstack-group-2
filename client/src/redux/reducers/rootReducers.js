import { combineReducers } from "redux";
import contents from './contentsReducer';
import support from "./supportsReducer";

const rootReducers = combineReducers({ contents, support });
export default rootReducers;