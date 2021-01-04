import { NextPage, NextPageContext } from "next"
import Error, { ErrorProps } from "next/error"

type PropsType = ErrorProps & { supportId?: string }

const ErrorPage: NextPage<PropsType> = (props) => {
	const { statusCode, supportId, title } = props

	return <Error statusCode={statusCode} title={title} />
}

ErrorPage.getInitialProps = (context: NextPageContext) => {
	const statusCode = context.res ? context.res.statusCode : context.err ? context.err.statusCode : 404
	return { statusCode }
}

export default ErrorPage
