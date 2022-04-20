import { combineReducers } from "redux";
import contents from './contentsReducer';

const rootReducers = combineReducers({ contents });
export default rootReducers;