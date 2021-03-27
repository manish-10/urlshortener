// import mongoose from 'mongoose';

// async function DBConnect() {
// 	const URI = "mongodb+srv://minuser:minwiz@1@miniurls.nislz.mongodb.net/test?retryWrites=true&w=majority"
// 	if (mongoose.connection.readyState >= 1) {
// 		return
// 	}

// 	return (
// 		mongoose.connect(URI, {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 			useFindAndModify: false,
// 			useCreateIndex: true,
// 		}),
// 		console.log("mongoose.connection.readyState")
// 	)
// }

// export async function getStaticProps() {
// 	const MONGODB_CONNECTION_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URI}/${process.env.MONGODB_DEFAULT_DB}?retryWrites=true&w=majority`

// 	return {
// 		props: {MONGODB_CONNECTION_URI}
// 	}
// }
  
import mongoose from 'mongoose';

const connection = {};
const URI = "mongodb+srv://manish:1234@cluster0.fgx28.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("hello")
}

export default dbConnect;
