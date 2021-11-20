import {createSelector} from 'reselect';
import {userInitialState, UserInitialStateI} from "../reducers/userReducer";

const selectUser = (state: any) => state.user || userInitialState;

const makeSelectAuth = () => {
    return createSelector(
        selectUser,
        (userState: UserInitialStateI) => userState.auth
    )
}

export {
    makeSelectAuth
}
