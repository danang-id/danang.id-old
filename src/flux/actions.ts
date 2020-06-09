import {Dispatch} from "redux";

export type Action = {
	type: string
	payload?: any
	[key: string]: any
}

export enum RootActions {
	SET_DARK_MODE = "SET_DARK_MODE",
}

export const dispatchSync = (action: Action) => (dispatch: Dispatch) => { dispatch(action) }

export const setDarkMode = (isDarkMode: boolean = true) => dispatchSync({
	type: RootActions.SET_DARK_MODE,
	payload: isDarkMode,
})
