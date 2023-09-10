const initState = {
    themeId: 1,
}

export type ThemeState = typeof initState

export const themeReducer = (state = initState, action: UnionAction): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': return {...state, themeId: action.id};
        default:
            return state
    }
}

type changeThemeIdType = {
    type: string
    id: number
}

type UnionAction = changeThemeIdType

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
