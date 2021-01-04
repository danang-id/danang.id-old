import { NextPage } from "next"
import Logo from "../components/Logo"
import Header from "../components/Header"

type PropsType = {}

const Index: NextPage<PropsType> = () => {
	return (
		<div style={{ height: "100vh" }}>
			<Logo />
			<Header />
		</div>
	)
}

export default Index
