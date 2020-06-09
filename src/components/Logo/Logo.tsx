import React from "react"
import {useSelector} from "react-redux"
import LogoColorLight from "../../assets/logo-color-light.png"
import LogoColorDark from "../../assets/logo-color-dark.png"
import {InitialState} from "../../flux/reducers"

function Logo() {
	const isDarkMode = useSelector<InitialState>((state) => state.root.isDarkMode)
	return <a href={process.env.PUBLIC_URL} className="logo">
		<img src={isDarkMode ? LogoColorDark : LogoColorLight} width="40" alt="Danang Galuh Tegar P" />
	</a>
}

export default Logo
