import React from "react"
import ReactDOM from "react-dom"

import Application from "./Application"
import {setDynamicFavicon} from "./helpers/favicon"
import * as serviceWorker from "./helpers/serviceWorker"

setDynamicFavicon()

ReactDOM.render(
	<React.StrictMode>
		<Application />
	</React.StrictMode>,
	document.getElementById("root")
)

serviceWorker.register()
