import React from "react"
import {useSelector} from "react-redux"
import {InitialState} from "../flux/reducers"

import "./Header.scss"

function Header() {
	const isDarkMode = useSelector<InitialState>((state) => state.root.isDarkMode)
	return (
		<div className="header">
			<div className={isDarkMode ? "intro-dark" : "intro"}>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<div className="intro-title wow fadeInUp">
								<h1>Danang Galuh Tegar P</h1>
							</div>
							<h1 className="wow fadeInUp">
								Full Stack Engineer with 3 years experiences in developing production ready projects.
								Fast learner with strong principle about security, privacy and cleanliness of a
								codebase. </h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
