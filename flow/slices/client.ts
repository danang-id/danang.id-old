import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

export type ClientState = {
	loading: boolean
	theme: "light" | "dark"
}

const slice = createSlice<ClientState, SliceCaseReducers<ClientState>>({
	name: "common",
	initialState: {
		loading: true,
		theme: "light",
	},
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
		setTheme: (state, action: PayloadAction<"light" | "dark">) => {
			state.theme = action.payload
		},
	},
})

export const setLoading = (loading: boolean) => slice.actions.setLoading(loading)
export const setTheme = (theme: "light" | "dark") => slice.actions.setTheme(theme)

export default slice.reducer
