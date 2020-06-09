import {createStore, applyMiddleware, Middleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

import reducers from "./reducers"

const middlewares: Middleware[] = []

middlewares.push(thunk)
if (process.env.NODE_ENV === "development") {
	const { logger } = require("redux-logger")
	middlewares.push(logger)
}

const store = createStore(reducers, process.env.NODE_ENV === "development"
	? composeWithDevTools(applyMiddleware(...middlewares))
	: applyMiddleware(...middlewares)
)

export default store
