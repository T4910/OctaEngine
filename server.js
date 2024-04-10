const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT

const app = express()

const corsOptions = {
    origin: ['http://localhost:5173']
}

app.use(express.json())
app.use(cors(corsOptions))
app.post('/', (req, res) => {
    res.json("Welcome to team Octagon.")
})

app.listen(port, console.log(`app is running on port ${port}`))