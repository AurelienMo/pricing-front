import AuthModel from "../../pages/LoginPage/AuthModel";
import {LOGIN_SUCCESS, SUBMIT_REFRESH_TOKEN_ERROR, SUBMIT_REFRESH_TOKEN_SUCCESS} from "../constants/globalConstants";

export interface UserInitialStateI {
    auth: AuthModel|null,
}

export const userInitialState: UserInitialStateI = {
    auth: null
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
    }

    return state;
}
