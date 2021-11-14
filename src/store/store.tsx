import {history} from "../libs/history";
import {configureStore} from "./configureStore";

const initialState = {};
export const store = configureStore(initialState, history);
