import { useState } from 'react'
export const ShortenUrlForm = ({ btnText }) => {
	const surl = `https://urlshortner-1.ayushk1804.repl.co`

	const [longUrl, setLongUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [data, setData] = useState("123456");

	const handleLongUrl = (e) => {
		setLongUrl(e.target.value)
	}
	const handleShortUrl = (e) => {
		setShortUrl(e.target.value)
	}


	const handleSubmit = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ shortUrl: `${shortUrl}`, longUrl: `${longUrl}`, userId: `${data}` })
		};
		const res = await fetch('https://urlshortner-1.ayushk1804.repl.co/api', requestOptions)
		const response = await res.json();
		setData(response.userId)
		console.log(response.success)
	}

	return (
		<>
			<form className=" m-4 rounded-lg">
				<div className="grid grid-cols-12 grid-rows-12 gap-7 container-xl w-full align-center">
					<input type="url" id="longurl" name="longurl" className=" row-span-1 col-span-8 bg-white px-4 py-2 border-t border-b border-l text-gray-700 focus:outline-none w-auto rounded" placeholder="That long url" onChange={handleLongUrl} />
					<button className="row-span-1 col-span-4 min-w-max rounded-full bg-yellow-400  text-gray-800 font-bold p-2 uppercase border-yellow-400 border-t border-b border-r focus:outline-none focus:ring focus-ring-2 focus:ring-yellow-400" onClick={handleSubmit}>{btnText}</button>
					<input type="text" id="shorturl" name="shorturl" className="row-span-1 col-span-8 bg-white px-4 py-2 border-t border-b border-l text-gray-700 focus:outline-none w-auto rounded" placeholder="Snip it to this!" onChange={handleShortUrl} />
					<p className="mr-auto row-span-1 col-span-full text-sm font-bold">{"The Short URL is "}<a className="text-blue-600 underline cursor-pointer" href={surl}>{surl}</a></p>
				</div>
			</form>
		</>
	)
}