import AuthModel from "../../pages/LoginPage/AuthModel";
import {
    LOGIN_SUCCESS,
    ME_INFORMATIONS_SUCCESS, ON_LOGOUT,
    SUBMIT_REFRESH_TOKEN_ERROR,
    SUBMIT_REFRESH_TOKEN_SUCCESS
} from "../constants/globalConstants";
import MeModel from "../../models/MeModel";

export interface UserInitialStateI {
    auth: AuthModel|null,
    me: MeModel|null
}

export const userInitialState: UserInitialStateI = {
    auth: null,
    me: null
}

export const userReducer = (state: UserInitialStateI = userInitialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                auth: action.auth
            }
        case SUBMIT_REFRESH_TOKEN_ERROR:
            return userInitialState;
        case SUBMIT_REFRESH_TOKEN_SUCCESS:
            return {
                auth: {
                    token: action.accessToken,
                    refresh_token: action.refreshToken
                }
            }
        case ME_INFORMATIONS_SUCCESS:
            return {
                ...state,
                me: action.me
            }
        case ON_LOGOUT:
            return userInitialState;
    }

    return state;
}
