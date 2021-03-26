export const ShortenUrlForm = ({ btnText }) => {
	const surl=`https://urlshortner-1.ayushk1804.repl.co`
	return (
		<>
			<form className=" m-4 rounded-lg">
				<div className="grid grid-cols-12 grid-rows-12 gap-7 container-xl w-full align-center">
					<input type="url" id="longurl" name="longurl" className=" row-span-1 col-span-8 bg-white px-4 py-2 border-t border-b border-l text-gray-700 focus:outline-none w-auto rounded" placeholder="That long url" />
					<button className="row-span-1 col-span-4 min-w-max rounded-full bg-yellow-400  text-gray-800 font-bold p-2 uppercase border-yellow-400 border-t border-b border-r focus:outline-none focus:ring focus-ring-2 focus:ring-yellow-400">{btnText}</button>

					<input type="text" id="shorturl" name="shorturl" className="row-span-1 col-span-8 bg-white px-4 py-2 border-t border-b border-l text-gray-700 focus:outline-none w-auto rounded" placeholder="Snip it to this!" />
					<p className="mr-auto row-span-1 col-span-full text-sm font-bold">{"The Short URL is "}<a className="text-blue-600 underline cursor-pointer" href={surl}>{surl}</a></p>
				</div>


			</form>
		</>
	)
}