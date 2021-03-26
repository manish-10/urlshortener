import { useRouter } from 'next/router'
export const Surl = () => {
	const router = useRouter()
	const { id } = router.query
	console.log(id)

	return <p>requested: {id}</p>
}
export default Surl