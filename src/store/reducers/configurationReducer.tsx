import {GET_CFG_CATEGORY_COURSE_SUCCESS, GET_TARIFICATIONS_SUCCESS} from "../constants/configurationConstants";
import CfgTarification from "../../models/CfgTarification";
import CfgCategoryCourse from "../../models/CfgCategoryCourse";

export interface ConfigurationInitialStateI {
    tarifications: CfgTarification[],
    categories: CfgCategoryCourse[]
}

export const configurationInitialState: ConfigurationInitialStateI = {
    tarifications: [],
    categories: []
}

export const configurationReducer = (state: ConfigurationInitialStateI = configurationInitialState, action: any) => {
    switch (action.type) {
        case GET_TARIFICATIONS_SUCCESS:
            return {
                ...state,
                tarifications: action.tarifications
            }
        case GET_CFG_CATEGORY_COURSE_SUCCESS:
            return {
                ...state,
                categories: action.categories
            }

    }

    return state;
}
