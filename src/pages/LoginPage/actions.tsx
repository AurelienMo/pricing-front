import {LOGIN_ERROR, LOGIN_SUCCESS, SUBMIT_LOGIN} from "../../store/constants/globalConstants";
import AuthModel from "./AuthModel";
import {GET_TARIFICATIONS_SUCCESS} from "../../store/constants/configurationConstants";
import CfgTarification from "../../models/CfgTarification";

export interface ModelAuthActionI {
    type: string,
    identifier: string,
    password: string,
    navigate: any
}

export function submitLogin(identifier: string, password: string, navigate: any): ModelAuthActionI {
    return {
        type: SUBMIT_LOGIN,
        identifier,
        password,
        navigate
    }
}

export function onLoginError(error: any) {
    return {
        type: LOGIN_ERROR,
        error
    }
}

export function onLoginSuccess(data: AuthModel) {
    return {
        type: LOGIN_SUCCESS,
        auth: data
    }
}

export function onGetTarificationsCfgSuccess(data: CfgTarification) {
    return {
        type: GET_TARIFICATIONS_SUCCESS,
        tarifications: data
    }
}