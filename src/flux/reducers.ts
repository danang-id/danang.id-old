import {Reducer, combineReducers} from "redux"
import {Action, RootActions} from "./actions"

export type State = {
	[key: string]: any
}

export type InitialRootState = {
	isDarkMode: boolean
}

const initialRootState: InitialRootState = {
	isDarkMode: false
}

const rootReducer: Reducer = (state: State = initialRootState, action: Action) => {
	switch(action.type) {
		case RootActions.SET_DARK_MODE:
			return {
				...state,
				isDarkMode: action.payload
			}
		default:
			return state
	}
}

const reducers: Reducer = combineReducers({
	root: rootReducer
})

export type InitialState = {
	root: InitialRootState
}

export default reducers
