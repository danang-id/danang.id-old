import { NextPage } from "next"
import Error from "next/error"

const NotFoundPage: NextPage = () => {
	return <Error statusCode={404} title="The page you are looking for is not found" />
}

export default NotFoundPage
