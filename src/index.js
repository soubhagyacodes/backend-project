import 'dotenv/config';
import { DBconnect } from "./db/index.js";
import app from './app.js';

DBconnect()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server Listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB Connection Fault!", err)
})

app.get('/', (req, res) => {
    res.send("HELLO WORLD!")
})
