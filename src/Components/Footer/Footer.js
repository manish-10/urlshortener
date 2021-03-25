import Link from 'next/link'
export const Footer = () => {
	return (
		<>
			<div className="bg-white w-full justify-between items-center z-50 shadowt-xl bottom-0 place-items-center">
				<a href="https://google.com" target="_parent" className="mr-auto">
					<span className="fab fa-github" href="http://www.google.com"></span>&nbsp;Github
				</a>
			</div>
		</>
	)
}