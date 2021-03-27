import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	const Layout = Component.layout || (({ children }) => <div className="bg-yellow-200">{children}</div>);
	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>)
}

export default MyApp
