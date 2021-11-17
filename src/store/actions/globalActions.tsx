import {
    SUBMIT_REFRESH_TOKEN,
    SUBMIT_REFRESH_TOKEN_ERROR,
    SUBMIT_REFRESH_TOKEN_SUCCESS,
    TOGGLE_LOADING
} from "../constants/globalConstants";

export function toggleLoading() {
    return {
        type: TOGGLE_LOADING
    }
}

export function userTryToLoginWithRefreshToken() {
    return {
        type: SUBMIT_REFRESH_TOKEN
    }
}

export function userLoggedWithRefreshToken(accessToken: string, refreshToken: string) {
    return {
        type: SUBMIT_REFRESH_TOKEN_SUCCESS,
        accessToken,
        refreshToken
    }
}

export function userFailedLoggedWithRefreshToken() {
    return {
        type: SUBMIT_REFRESH_TOKEN_ERROR
    };
}
