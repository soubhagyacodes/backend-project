import 'dotenv/config';
import express from "express";
import { DBconnect } from "./db/index.js";

DBconnect()

const app = express()

app.get('/', (req, res) => {
    res.send("HELLO WORLD!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on port ${process.env.PORT}`)
})