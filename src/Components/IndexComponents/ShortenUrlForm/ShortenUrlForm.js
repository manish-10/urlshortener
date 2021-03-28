import { useState, useEffect } from 'react'
import Image from 'next/image'

export const ShortenUrlForm = ({ btnText }) => {

	useEffect(() => (setSurl(window.location.href)), [])
	const [longUrl, setLongUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [userHash, setUserHash] = useState("123456");
	const [surl, setSurl] = useState();
	const handleLongUrl = (e) => {
		setLongUrl(e.target.value)
	}
	const handleShortUrl = (e) => {
		setShortUrl(e.target.value)
	}

	const urlPattern="(http|https)://([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?"

	const handleSubmit = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ shortUrl: `${shortUrl}`, longUrl: `${longUrl}`, userId: `${userHash}` })
		};
		const res = await fetch(`/api/v1/update/${shortUrl}?authHash=${userHash}&lurl=${longUrl}`, requestOptions)
		const response = await res.json();
		setSurl(response.data.shortUrl)
		console.log(response.success)
	}


	return (
		<>
			<form className=" m-4 rounded-lg" onSubmit={handleSubmit}>
				{/*<Image
					alt="KameHameHa"
					src="/vegeta.gif"
					width={5}
					height={2}
					layout="responsive"
					quality={10}
					className="z-100"
				/>*/}
				<div className="grid grid-cols-12 grid-rows-12 gap-7 w-full align-center">
					<input type="url" id="longurl" name="longurl" className=" row-span-1 col-span-8 bg-white px-4 py-2 border-t border-b border-l text-gray-700 focus:outline-none w-auto rounded" placeholder="https://longurl.sucks" onChange={handleLongUrl} pattern={urlPattern} required />
					<input type="submit" className="row-span-1 col-span-4 min-w-max rounded-full bg-yellow-400  text-gray-800 font-bold p-2 uppercase border-yellow-400 border-t border-b border-r focus:outline-none focus:ring focus-ring-2 focus:ring-yellow-400" value={btnText}/>
					<input type="text" id="shorturl" name="shorturl" className="row-span-1 col-span-8 bg-white px-4 py-2 border-t border-b border-l text-gray-700 focus:outline-none w-auto rounded" placeholder="Snip it to this!" onChange={handleShortUrl} required />
					{surl ? <p className="mr-auto row-span-1 col-span-full text-sm font-bold">{"The Short URL is "}<a className="text-blue-600 underline cursor-pointer" href={`${surl}${shortUrl}`}>{`${surl}${shortUrl}`}</a></p> : null}
				</div>
			</form>
		</>
	)
}