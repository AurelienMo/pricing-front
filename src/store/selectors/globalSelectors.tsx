import { createSelector } from 'reselect';
import {globalInitialState} from "../reducers/globalReducer";

const selectGlobal = (state: any) => state.global || globalInitialState

const makeSelectLoading = () => {
    return createSelector(
        selectGlobal,
        globalState => globalState.loading
    )
}

const makeSelectorErrors = () => {
    return createSelector(
        selectGlobal,
        globalState => globalState.errors
    )
}

export {
    makeSelectLoading,
    makeSelectorErrors
}
