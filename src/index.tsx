import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import Application from "./Application"
import store from "./flux/store"
import * as serviceWorker from "./helpers/serviceWorker"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Application />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)

serviceWorker.register()
