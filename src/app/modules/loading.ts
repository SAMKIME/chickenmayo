//## Actions Types
export const SET_LOADING = "loading/SET" as const;
export const INIT_LOADING = "loading/INIT" as const;

/**
 * Loading Initialize
 * -----------------------------------------------------------------------------------------------------------------
 */
export const initLoading = () => ({
    type: INIT_LOADING
});

export type LoadingAction =
    | ReturnType<typeof setLoading>
    | ReturnType<typeof initLoading>;

/**
 * Loading Set
 * -----------------------------------------------------------------------------------------------------------------
 */
export const setLoading = (loading: boolean) => ({
    type: SET_LOADING,
    payload: {loading}
});

export type LoadingStateType = {
    loading: boolean;
};

//## InitialState
export const InitialLoading: LoadingStateType = {
    loading: false
};

function loadingReducer(state: LoadingStateType = InitialLoading, action: LoadingAction) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            };
        case INIT_LOADING:
            return InitialLoading;
        default:
            return state;
    }
}

export default loadingReducer;
