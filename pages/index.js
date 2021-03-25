import Head from 'next/head'
import { Layout } from '../src/Components/Layout/Layout'

export default function Home() {

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>URL Shortner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

			</main>
		</div>
	)
}

Home.layout = Layout;