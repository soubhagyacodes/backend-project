import 'dotenv/config';
import { DBconnect } from "./db/index.js";
import app from './app.js';

DBconnect()

app.get('/', (req, res) => {
    res.send("HELLO WORLD!")
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server Listening on port ${process.env.PORT}`)
})