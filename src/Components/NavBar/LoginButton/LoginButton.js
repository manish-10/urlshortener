import { signIn, signOut, useSession } from 'next-auth/client'

export const LoginButton = ({ handleLoginModal }) => {
	const [session, loading] = useSession()
	const ButtonProps = "p-1 tracking-wider border-b-2 border-l-2 border-yellow-500 px-2 rounded mx-2 shadow-lg z-70 font-bold text-gray-900 hover:transform hover:scale-95 focus:outline-none"
	return (
		<>
			{session ? <button className={`bg-yellow-500 ${ButtonProps}`} onClick={() => signOut()}>{"Log Out"}</button> : <button className={`bg-yellow-300 ${ButtonProps}`} onClick={(e) => handleLoginModal()}>{"Log In"}</button>}
		</>
	)
}