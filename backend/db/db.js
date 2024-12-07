import mongoose from "mongoose";

export default function dbConnect() {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("Database conneceted successfully"))
    } catch (error) {
        console.log(`Error connecting to database ${error}`)
    }
}