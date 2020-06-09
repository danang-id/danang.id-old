import React from "react"
import Logo from "../../components/Logo/Logo"
import Header from "../../components/Header/Header"
import "./Home.scss"

function Home() {
	return (
		<div className="home" style={{ height: "100vh" }}>
			<Logo />
			<Header />
		</div>
	)
}

export default Home
