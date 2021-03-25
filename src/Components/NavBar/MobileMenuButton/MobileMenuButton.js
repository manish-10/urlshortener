export const MobileMenuButton = ({ mobileMenu, handleMobileMenu, addTailwindClass = "" }) => {
	return (
		<button
			className={`inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none focus:outline-none ${addTailwindClass}`}
			onClick={handleMobileMenu}>
			{!mobileMenu ? (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
					</svg>
				)}
		</button>
	)
}