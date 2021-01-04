const path = require("path")
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = {
	basePath: "",
	distDir: ".next",
	env: {
		APP_TITLE: "Danang Galuh Tegar Prasetyo",
		APP_DESCRIPTION: "Personal page of Danang Galuh Tegar Prasetyo.",
		APP_AUTHOR: "Danang Galuh Tegar Prasetyo",
		APP_KEYWORDS: "Danang, Full Stack Engineer, Curricullum Vitae, Portfolios",
	},
	poweredByHeader: false,
	publicRuntimeConfig: {
		// Will be available on both server and client
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	serverRuntimeConfig: {
		// Will only be available on the server side
	},
	trailingSlash: false,
}
