import {
    LOGIN_ERROR,
    SUBMIT_LOGIN,
    SUBMIT_REFRESH_TOKEN, SUBMIT_REFRESH_TOKEN_ERROR,
    TOGGLE_LOADING
} from "../constants/globalConstants";
import {GET_TARIFICATIONS_SUCCESS} from "../constants/configurationConstants";

export interface GlobalInitialStateI {
    loading: boolean,
    errors: any
}

export const globalInitialState: GlobalInitialStateI = {
    loading: false,
    errors: null
}

export const globalReducer = (state: GlobalInitialStateI = globalInitialState, action: any) => {
    switch (action.type) {
        case SUBMIT_LOGIN:
            return {
                loading: true,
                errors: null,
            }
        case LOGIN_ERROR:
            return {
                loading: false,
                errors: action.error.error
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case SUBMIT_REFRESH_TOKEN:
            return {
                ...state,
                loading: true
            }
        case SUBMIT_REFRESH_TOKEN_ERROR:
            return {
                ...state,
                loading: false
            }
        case GET_TARIFICATIONS_SUCCESS:
            return {
                ...state,
                loading: false
            }
    }
    return state;
}
