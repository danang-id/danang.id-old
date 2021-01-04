import React from "react"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState } from "../../flow/store"
import styles from "./Logo.module.scss"

type PropsType = {}

const Logo: React.FC<PropsType> = () => {
	const theme = useSelector<RootState, "light" | "dark">((state) => state.client.theme)

	return (
		<a href="/" className={styles.logo}>
			<Image src={`/images/logo-color-${theme}.png`} alt="Danang Galuh Tegar P" width={40} height={40} />
		</a>
	)
}

export default Logo
