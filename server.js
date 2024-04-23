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
const venueRoute = require('./routes/venue')

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
    // Define dummy data

    // const dummyData = [
    //     {
    //       current: true,
    //       name: 'Spring Semester',
    //       description: 'Spring semester timetable',
    //       status: 'active',
    //       semester: 'alpha',
    //       academicYear: '2023-2024',
    //       timing: {
    //         startDay: 'monday',
    //         endDay: 'friday',
    //         startHour: new Date('2010-01-01T08:00:00.000Z'),
    //         endHour: new Date('2010-01-01T18:00:00.000Z'),
    //         intervals: 60
    //       },
    //       type: 'class',
    //       schedule: [
    //         {
    //           level: 100,
    //           departmentId: '662040c708c11ca848fffa12',
    //           day: 'monday',
    //           venueId: '662040c708c11ca848fffa10',
    //           courseId: '6620421cf9127d181976a91c',
    //           event: 'lecture',
    //           coordinator: '661fe4a166812c7a186da26a',
    //           startTime: new Date('2024-04-19T08:00:00.000Z'),
    //           endTime: new Date('2024-04-19T10:00:00.000Z')
    //         },
    //         // Add more schedule items as needed
    //       ]
    //     },
    //     {
    //       current: false,
    //       name: 'Fall Semester',
    //       description: 'Fall semester timetable',
    //       status: 'draft',
    //       semester: 'omega',
    //       academicYear: '2023-2024',
    //       timing: {
    //         startDay: 'monday',
    //         endDay: 'friday',
    //         startHour: new Date('2010-01-01T08:00:00.000Z'),
    //         endHour: new Date('2010-01-01T18:00:00.000Z'),
    //         intervals: 60
    //       },
    //       type: 'class',
    //       schedule: [
    //         {
    //           level: 200,
    //           departmentId: '662040c708c11ca848fffa12',
    //           day: 'tuesday',
    //           venueId: '662040c708c11ca848fffa10',
    //           courseId: '6620421cf9127d181976a91c',
    //           event: 'lecture',
    //           coordinator: '661fe4a166812c7a186da26a',
    //           startTime: new Date('2024-04-20T10:00:00.000Z'),
    //           endTime: new Date('2024-04-20T12:00:00.000Z')
    //         },
    //         // Add more schedule items as needed
    //       ]
    //     },
    //     // Add more dummy records as needed
    //   ];

    //  const t = await Timetable.insertMany(dummyData);
    return res.status(200).json({
        message: "Welcome to team Octagon.",
        // t
    });
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
app.use('/venue', venueRoute)

const mongo_uri = process.env.MONGO_URI

//! connect to mongodb
async function connectDB() {
    try {
        await mongoose.connect(`${mongo_uri}/landmark`);
        console.log('MongoDB connected...')
    } catch (error) {

        console.log({ message: 'error connecting to database', error })
    }
}


async function main() {
    app.listen(port, console.log(`app is running on port ${port}...`))
    await connectDB();
}

main();
