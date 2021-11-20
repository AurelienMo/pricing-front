import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {history} from "../../libs/history";
import {globalReducer} from "./globalReducer";
import {userReducer} from "./userReducer";
import {configurationReducer} from "./configurationReducer";

export const createReducer = (injectedReducers = {}) => {
    return combineReducers({
        global: globalReducer,
        user: userReducer,
        configuration: configurationReducer,
        router: connectRouter(history),
        ...injectedReducers
    })
}
