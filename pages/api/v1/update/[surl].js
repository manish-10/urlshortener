import DBConnect from '../../../../src/Utils/DBConnect';
import URLSchema from '../../../../src/Models/URLSchema';
import { useSession } from 'next-auth/client'

export default async function UpdateShortURLs(req, res) {
	const [session, loading] = useSession()
	const { method } = req;
	switch (method) {
		// update function
		case 'POST':
			try {
				const { query: { surl, lurl } } = req
				if (session && session.user.email) {
					const userEmail = session.user.email
					// update hash with bcrypt (encrypt email) for security
					const userEmailHash = '1234';
					// we can include upsert as surl is unique and we are adding all values
					const updated = await URLSchema.findOneAndUpdate({ "shortUrl": surl, userId: userEmailHash }, { userId: userEmailHash, shortUrl: surl, longUrl: lurl }, { new: true, upsert: true }, (err, updatedData) => {
						if (err) {
							res.status(500).json({ success: false, message: err })
						}
						res.status(200).json({ success: true, data: updatedData })
					})
				}
				else {
					res.status(400).send("Sign In to edit your URLs")
				}
			}
			break;
		case 'PUT':
			try {
				if (session && session.user.email) {
					const userEmail = session.user.email
				}
				else {
					const userEmail = 'guest@mysite.com'
				}
			}
			break;
		case 'DELETE':
			try {

			}
		break;
		default:
			res.status(400).json({ message: "We only support {POST, PUT and DELETE} requests on this api" });
			break;
	}
}