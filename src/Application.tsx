import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {setDarkMode} from "./flux/actions";
import {setFavicon} from "./helpers/favicon"
import Home from "./pages/Home/Home"

import "./Application.scss"

function Application() {
	const [mediaQuery, setMediaQuery] = useState(window.matchMedia("(prefers-color-scheme: dark)"))
	const dispatch = useDispatch()

	useEffect(() => {
		function eventListener(this: MediaQueryList) {
			setMediaQuery(this)
			dispatch(setDarkMode(this.matches))
			setFavicon(mediaQuery.matches)
		}
		dispatch(setDarkMode(mediaQuery.matches))
		setFavicon(mediaQuery.matches)
		mediaQuery.addEventListener("change", eventListener)
		return () => {
			mediaQuery.removeEventListener("change", eventListener)
		}
	})

	return <>
		<Home />
	</>
}

export default Application
