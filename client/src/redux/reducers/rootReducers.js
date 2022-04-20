import { combineReducers } from "redux";
import contents from './contentsReducer';
import accountSys from './RegLogReducer'

const rootReducers = combineReducers({ contents, accountSys });
export default rootReducers;