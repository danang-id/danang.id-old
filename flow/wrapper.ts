import { createWrapper } from "next-redux-wrapper"
import store, { RootState } from "./store"

const flowWrapper = createWrapper<RootState>(store, {
	debug: process.env.NODE_ENV !== "production",
})

export default flowWrapper
