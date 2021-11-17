import {GET_TARIFICATIONS_SUCCESS} from "../constants/configurationConstants";
import CfgTarification from "../../models/CfgTarification";

export interface ConfigurationInitialStateI {
    tarifications: CfgTarification[]
}

export const configurationInitialState: ConfigurationInitialStateI = {
    tarifications: []
}

export const configurationReducer = (state: ConfigurationInitialStateI = configurationInitialState, action: any) => {
    switch (action.type) {
        case GET_TARIFICATIONS_SUCCESS:
            console.log(action);
            return {
                ...state,
                tarifications: action.tarifications
            }
    }

    return state;
}
