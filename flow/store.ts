import { combineReducers, createStore } from "@reduxjs/toolkit"
import { MakeStore } from "next-redux-wrapper"
import client, { ClientState } from "./slices/client"

export type RootState = {
	client: ClientState
}

const reducers = combineReducers({
	client,
})

const store: MakeStore<RootState> = (context) => createStore(reducers)

export default store
