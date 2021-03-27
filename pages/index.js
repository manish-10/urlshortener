import Head from 'next/head'
import { Layout } from '../src/Components/Layout/Layout'
import { ShortenUrlForm } from '../src/Components/IndexComponents/ShortenUrlForm/ShortenUrlForm'


export default function Home() {
	
	return (
		<div className="flex flex-wrap justify-center min-h-screen py-2">
			<Head>
				<title>URL Shortner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-row items-center justify-center flex-1 px-20 text-center">
				<ShortenUrlForm placeHolder="That Long Url..." btnText="Shorten Url" />
			</main>
		</div>
	)
}

Home.layout = Layout;