import {IndexNav} from '../NavBar/IndexNav'
import {Footer} from '../Footer/Footer'
export const Layout = ({ children }) => {
	return (
		<div className="bg-red-300">
		<IndexNav/>
			{children}
      <Footer/>
		</div>
	)
}
