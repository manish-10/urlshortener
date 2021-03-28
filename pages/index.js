import { useState } from 'react'
import Head from 'next/head'
import { Layout } from '../src/Components/Layout/Layout'
import { ShortenUrlForm } from '../src/Components/IndexComponents/ShortenUrlForm/ShortenUrlForm'
import { About } from '../src/Components/IndexComponents/AboutSection/About'
import { LoginModal } from '../src/Components/LoginModal/LoginModal'


export default function Home() {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<>
			<div className="flex flex-wrap justify-center align-center min-h-screen py-2">
				<Head>
					<title>URL Shortner</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				{modalOpen ? <LoginModal /> :
					<main className="flex flex-col align-center items-center justify-center flex-1 px-20 text-center z-10">
						<div className="flex min-h-screen align-center items-center">
							<ShortenUrlForm placeHolder="That Long Url..." btnText="Shorten Url" />
						</div>
						<About />
					</main>}
			</div>
		</>
	)
}

Home.layout = Layout;