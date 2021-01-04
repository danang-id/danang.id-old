import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../../flow/store"
import styles from "./Header.module.scss"

const Header: React.FC = () => {
	const theme = useSelector<RootState, "light" | "dark">((state) => state.client.theme)
	const [color, setColor] = useState<string>("#3B3B3B")

	useEffect(() => {
		setColor(theme === "light" ? "#3B3B3B" : "#CCCCCC")
	}, [theme])

	return (
		<div
			className={styles.header}
			style={{
				backgroundImage: `url("/images/header-${theme}.jpg")`,
			}}
		>
			<Container>
				<Row>
					<Col xs={12} sm={6}>
						<div className="intro-title wow fadeInUp">
							<h1>Danang Galuh Tegar P</h1>
						</div>
						<h1 className="wow fadeInUp" style={{ color }}>
							Go & ECMAScript enthusiast.
						</h1>
						<div className="sub-content wow fadeInUp">
							<p style={{ color }}>
								<span style={{ color }}>NOTICE</span>
								Portfolios will be available soon.
							</p>
						</div>
						<div className="sub-content wow fadeInUp">
							<p style={{ color }}>
								<span style={{ color }}>HINT</span>
								Your system has light/dark mode?
								<br />
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
