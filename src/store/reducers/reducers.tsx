import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {history} from "../../libs/history";
import {globalReducer} from "./globalReducer";

export const createReducer = (injectedReducers = {}) => {
    return combineReducers({
        global: globalReducer,
        router: connectRouter(history),
        ...injectedReducers
    })
}
