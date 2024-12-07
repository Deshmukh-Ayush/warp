import mongoose from "mongoose";

export default function dbConnect() {
    try {
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
        .then(console.log("Connected to Database"))
    } catch (error) {
        console.log(`Error connecting to database ${error}`)
    }
}
