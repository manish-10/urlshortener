// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function helloAPI(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import DBConnect from '../../src/Utils/DBConnect'


DBConnect();

export default async function(req, res){
	res.json({ test: 'test' });
}