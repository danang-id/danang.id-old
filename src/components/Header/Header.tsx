import React from "react"
import {useSelector} from "react-redux"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import {InitialState} from "../../flux/reducers"

import "./Header.scss"

function Header() {
	const isDarkMode = useSelector<InitialState>((state) => state.root.isDarkMode)
	return (
		<div className="header" style={{
			backgroundImage: `url("${process.env.PUBLIC_URL}/images/${isDarkMode ? "header-dark.jpg" : "header-light.jpg"}")`
		}}>
			<Container>
				<Row>
					<Col xs={12} sm={6}>
						<div className="intro-title wow fadeInUp">
							<h1>Danang Galuh Tegar P</h1>
						</div>
						<h1 className="wow fadeInUp" style={{ color: isDarkMode ? "#CCCCCC" : "#3B3B3B" }}>
							Go & ECMAScript enthusiast.
						</h1>
						<div className="sub-content wow fadeInUp">
							<p style={{ color: isDarkMode ? "#CCCCCC" : "#3B3B3B" }}>
								<span style={{ color: isDarkMode ? "#CCCCCC" : "#3B3B3B" }}>NOTICE</span>
								Portfolios will be available soon.
							</p>
						</div>
						<div className="sub-content wow fadeInUp">
							<p style={{ color: isDarkMode ? "#CCCCCC" : "#3B3B3B" }}>
								<span style={{ color: isDarkMode ? "#CCCCCC" : "#3B3B3B" }}>HINT</span>
								Your system has light/dark mode?<br />
								This page will adapt your system color!
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Header
