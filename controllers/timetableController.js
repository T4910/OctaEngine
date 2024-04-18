const Timetable = require('../models/timetableModel')

const addTimetable = async ( req, res ) => {

    return res.status(200).json({})
}
const getTimetable = async ( req, res ) => {
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

    return res.status(200).json({...selectedSchedule[department][level]})
}
const removeTimetable = async ( req, res ) => {

    return res.status(200).json({})
}

module.exports = { addTimetable, removeTimetable, getTimetable }