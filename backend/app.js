import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import dbConnect from "./db/db.js";

dotenv.config();

dbConnect();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("WARP")
})

export default app;