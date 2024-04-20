const Timetable = require('../models/timetableModel')

const addTimetable = async ( req, res ) => {

    return res.status(200).json({})
}

const getTimetable = async ( req, res ) => { 
    const fetchedTimetables = 
    !(!!req.body.id) 
        ? await Timetable.find(req.body) 
        : await Timetable.findById(req?.body?.id)
        // .populate('schedule.venueId')
          .populate('schedule.departmentId')
          .populate('schedule.courseId')
        //   .populate('schedule.userIdrs')
    console.log(req.body, fetchedTimetables, 5555)

    return res.status(200).json({timetables: fetchedTimetables})
}

const removeTimetable = async ( req, res ) => {

    return res.status(200).json({})
}


module.exports = { 
    addTimetable, 
    removeTimetable, 
    getTimetable 
}