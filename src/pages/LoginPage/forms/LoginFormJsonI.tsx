import {FormReactJsonInterface} from "../../../components/FormReactJsonInterface";

export interface LoginFormDataI {
    identifier: string,
    password: string
}

export interface LoginFormJsonI extends FormReactJsonInterface {
    formData: LoginFormDataI,
}
