export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false,
}

export const loadingReducer = (state: LoadingStateType = initState, action: loadingACType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}


export  type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)
