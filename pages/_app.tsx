import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NextPage } from "next"
import { AppProps } from "next/app"
import Head from "next/head"
import { RootState } from "../flow/store"
import flowWrapper from "../flow/wrapper"
import { setTheme } from "../flow/slices/client"
import "../styles/bootstrap.scss"
import "../styles/global.scss"

const Application: NextPage<AppProps> = (props) => {
	const { Component, pageProps } = props
	const dispatch = useDispatch()
	const theme = useSelector<RootState, "light" | "dark">((state) => state.client.theme)
	const [color, setColor] = useState<string>("#ffffff")
	const [themeMediaQueryList, setThemeMediaQueryList] = useState<MediaQueryList>(null)

	const setMediaQueryMatches = (mediaQueryMatches: boolean) => {
		if (mediaQueryMatches) {
			dispatch(setTheme("dark"))
		} else {
			dispatch(setTheme("light"))
		}
	}

	const onThemeMediaQueryListChange = (event: MediaQueryListEvent) => {
		setMediaQueryMatches(event.matches)
	}

	useEffect(() => {
		if ("matchMedia" in window) {
			setThemeMediaQueryList(window.matchMedia("(prefers-color-scheme: dark)"))
		}
	}, [])

	useEffect(() => {
		if (themeMediaQueryList !== null) {
			themeMediaQueryList.addEventListener("change", onThemeMediaQueryListChange)
			setMediaQueryMatches(themeMediaQueryList.matches)
		}
		return () => {
			if (themeMediaQueryList !== null) {
				themeMediaQueryList.removeEventListener("change", onThemeMediaQueryListChange)
			}
		}
	}, [themeMediaQueryList])

	useEffect(() => {
		setColor(theme === "light" ? "#ffffff" : "#000000")
	}, [theme])

	return (
		<Fragment>
			<Head>
				<link rel="apple-touch-icon" sizes="57x57" href={`/icons/${theme}/apple-icon-57x57.png`} />
				<link rel="apple-touch-icon" sizes="60x60" href={`/icons/${theme}/apple-icon-60x60.png`} />
				<link rel="apple-touch-icon" sizes="72x72" href={`/icons/${theme}/apple-icon-72x72.png`} />
				<link rel="apple-touch-icon" sizes="76x76" href={`/icons/${theme}/apple-icon-76x76.png`} />
				<link rel="apple-touch-icon" sizes="114x114" href={`/icons/${theme}/apple-icon-114x114.png`} />
				<link rel="apple-touch-icon" sizes="120x120" href={`/icons/${theme}/apple-icon-120x120.png`} />
				<link rel="apple-touch-icon" sizes="144x144" href={`/icons/${theme}/apple-icon-144x144.png`} />
				<link rel="apple-touch-icon" sizes="152x152" href={`/icons/${theme}/apple-icon-152x152.png`} />
				<link rel="apple-touch-icon" sizes="180x180" href={`/icons/${theme}/apple-icon-180x180.png`} />
				<link rel="icon" type="image/png" sizes="192x192" href={`/icons/${theme}/android-icon-192x192.png`} />
				<link rel="icon" type="image/png" sizes="16x16" href={`/icons/${theme}/favicon-16x16.png`} />
				<link rel="icon" type="image/png" sizes="32x32" href={`/icons/${theme}/favicon-32x32.png`} />
				<link rel="icon" type="image/png" sizes="96x96" href={`/icons/${theme}/favicon-96x96.png`} />
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content={color} />
				<meta name="msapplication-TileImage" content={`/icons/${theme}/ms-icon-144x144.png`} />
				<meta name="theme-color" content={color} />

				<title>{process.env.APP_TITLE}</title>
				<meta name="description" content={process.env.APP_DESCRIPTION} />
				<meta name="author" content={process.env.APP_AUTHOR} />
				<meta name="keywords" content={process.env.APP_KEYWORDS} />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default flowWrapper.withRedux(Application)
