require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT



//! cors options
const corsOptions = {
    origin: [process.env.WEBSITE]
}

//! middlewares
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

//! index router
app.get('/', async (req, res) => {
    return res.json({ message: "Welcome to team Octagon." })
})

//! start the server
app.listen(port, console.log(`app is running on port ${port}...`))