import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {setDarkMode} from "./flux/actions";
import {setFavicon} from "./helpers/favicon"
import Home from "./pages/Home/Home"

import "./Application.scss"

function Application() {
	const [mediaQueryList, setMediaQueryList] = useState(window.matchMedia("(prefers-color-scheme: dark)"))
	const dispatch = useDispatch()

	useEffect(() => {
		function eventListener(this: MediaQueryList) {
			setMediaQueryList(this)
			dispatch(setDarkMode(this.matches))
			setFavicon(mediaQueryList.matches)
		}
		dispatch(setDarkMode(mediaQueryList.matches))
		setFavicon(mediaQueryList.matches)
		try {
			mediaQueryList.addEventListener("change", eventListener)
		} catch (e1) {
			try {
				mediaQueryList.addListener(eventListener)
			} catch (e2) {
				console.error(e2)
			}
		}
		return () => {
			try {
				mediaQueryList.removeEventListener("change", eventListener)
			} catch (e1) {
				try {
					mediaQueryList.removeListener(eventListener)
				} catch (e2) {
					console.error(e2)
				}
			}
		}
	})

	return <>
		<Home />
	</>
}

export default Application
