export interface GlobalInitialStateI {
    loading: boolean
}

export const globalInitialState: GlobalInitialStateI = {
    loading: false
}

export const globalReducer = (state: GlobalInitialStateI = globalInitialState, action: any) => {
    return state;
}
