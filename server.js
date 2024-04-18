require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const port = process.env.PORT

//! import routes
const userRoute = require('./routes/user')
const departmentRoute = require('./routes/department')
const courseRoute = require('./routes/course')
const timetableRoute = require('./routes/timetable')
// const timeslotRoute = require('./routes/timeslot')
// const activityRoute = require('./routes/activity')
// const issueRoute = require('./routes/issue')
// const reportRoute = require('./routes/report')

//! cors options
const corsOptions = {
    origin: [process.env.WEBSITE]
}

//! express app
const app = express();

//! middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

//! index router
app.get('/', async (req, res) => {
    return res.status(200).json({ message: "Welcome to team Octagon.", T });
})

//! routes
app.use('/user', userRoute)
app.use('/timetable', timetableRoute)
app.use('/department', departmentRoute)
app.use('/course', courseRoute)
// app.use('/timeslot', timeslotRoute)
// app.use('/activity', activityRoute)
// app.use('/issue', issueRoute)
// app.use('/report', reportRoute)

const mongo_uri = process.env.MONGO_URI

//! connect to mongodb
mongoose.connect(`${mongo_uri}`)
.then(() => {
    //listen
    app.listen(port, console.log(`app is connected to mongodb server and running on port ${port}...`))
})
.catch((error) => console.log({ message: 'error connecting to database', error }))