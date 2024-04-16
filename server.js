require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const port = process.env.PORT

//! import routes
const userRoute = require('./routes/user')
// const departmentRoute = require('./routes/department')
// const courseRoute = require('./routes/course')
// const timetableRoute = require('./routes/timetable')
// const timeslotRoute = require('./routes/timeslot')
// const activityRoute = require('./routes/activity')
// const issueRoute = require('./routes/issue')
// const reportRoute = require('./routes/report')

//! cors options
const corsOptions = {
    origin: [process.env.WEBSITE]
}

//! express app
const app = express()

//! middlewares
app.use(express.json())
app.use(cors(corsOptions))
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//! index router
app.get('/', async (req, res) => {
    return res.status(200).json({ message: "Welcome to team Octagon." })
})

// app.use('/timetable', timetableRoute)
app.get('/schedule', async (req, res) => {
  const { level, department } = req.body;

  // dummy data to be gotten from database
    const selectedSchedule = {
        semester: 1,
        year: '2023/2024',
        mode: 'classes', // or Exam
    
        startDay: 'Monday',
        endDay: 'Saturday',
        lectureHours: {
            startHour: '8:00 AM',
            endHour: '6:00 PM'
        },
        departments: {
            'Computer Science': {
                100: {
                    monday: [
                        {
                          id: 1,
                          name: "TMC 222",
                          venue: 'LT1',
                          event: {
                            type: "lecture",
                            coordinator: 'Mr. Shaba'
                          },
                          startTime: new Date("2018-02-23T15:00:00"),
                          endTime: new Date("2018-02-23T16:00:00"),
                        },
                        {
                          id: 1,
                          name: "CSC 222",
                          venue: 'LT1',
                          event: {
                            type: "lecture",
                            coordinator: 'Mr. Shaba'
                          },
                          startTime: new Date("2018-02-23T11:00:00"),
                          endTime: new Date("2018-02-23T12:00:00"),
                        },
                      ],
                    tuesday: [],
                    wednesday : [
                        {
                          id: 1,
                          name: "CSC 212",
                          venue: 'LT1',
                          event: {
                            type: "lecture",
                            coordinator: 'Mr. Shaba'
                          },
                          startTime: new Date("2018-02-23T13:00:00"),
                          endTime: new Date("2018-02-23T15:00:00"),
                        },
                        {
                          id: 2,
                          name: "CSC 217",
                          venue: 'LT1',
                          event: {
                            type: "lecture",
                            coordinator: 'Mr. Shaba'
                          },
                          startTime: new Date("2018-02-23T15:00:00"),
                          endTime: new Date("2018-02-23T16:00:00"),
                        },
                      ],
                    thursday: [],
                    friday: [],
                    saturday: [],
                },
                200: {
                    monday: [
                        {
                          id: 1,
                          name: "CSC 222",
                          event: {
                            type: "lecture",
                            venue: 'LT1',
                            coordinator: 'Mr. Shaba'
                          },
                          startTime: new Date("2018-02-23T11:30:00"),
                          endTime: new Date("2018-02-23T13:30:00"),
                        },
                      ],
                },
                300: {
                    monday: [
                        {
                          id: 1,
                          name: "CSC 222",
                          event: {
                            type: "lecture",
                            venue: 'LT1',
                            coordinator: 'Mr. Shaba'
                          },
                          startTime: new Date("2018-02-23T11:30:00"),
                          endTime: new Date("2018-02-23T13:30:00"),
                        },
                      ],
                },
                400: {
                    monday: [
                        {
                          id: 1,
                          name: "CSC 222",
                          event: {
                            type: "lecture",
                            venue: 'LT1',
                            coordinator: 'Mr. Shaba'
                          },
                          startTime: new Date("2018-02-23T11:30:00"),
                          endTime: new Date("2018-02-23T13:30:00"),
                        },
                      ],
                },
            }
        }
    }
    
    return res.status(200).json({schedule: selectedSchedule});
})
  
  
//! routes
app.use('/user', userRoute)
// app.use('/department', departmentRoute)
// app.use('/course', courseRoute)
// app.use('/timeslot', timeslotRoute)
// app.use('/activity', activityRoute)
// app.use('/issue', issueRoute)
// app.use('/report', reportRoute)

const mongo_url = process.env.MONGO_URL

//! connect to mongodb
mongoose.connect(`${mongo_url}/landmark`)
    .then(() => {
        //listen
        app.listen(port, console.log(`app is connected to mongodb server and running on port ${port}...`))
    })
    .catch((error) => console.log({ message: 'error connecting to server', error }))