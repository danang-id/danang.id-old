import React from "react"
import Logo from "../components/Logo"
import Header from "../components/Header"
import "./Home.scss"

function Home() {
	return (
		<div className="home">
			<div className="wrapper">
				<Logo />
				<div id="main" className="main">
					<Header />
				</div>
			</div>
		</div>
	)
}

export default Home
