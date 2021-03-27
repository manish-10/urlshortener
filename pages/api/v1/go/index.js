import dbConnect from '../../../../src/Utils/DBConnect';
import UrlSchema from '../../../../src/Models/UrlSchema';

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const notes = await UrlSchema.find({});
				res.status(200).json({ success: true, data: notes })
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const note = await UrlSchema.create(req.body);

				res.status(201).json({ success: true, data: note })
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}