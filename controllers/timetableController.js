const Timetable = require('../models/timetableModel')

/** 
 * {
        current: true,
        name: 'Spring Semester',
        description: 'Spring semester timetable',
        status: 'active',
        semester: 'alpha',
        academicYear: '2023-2024',
        timing: {
          startDay: 'monday',
          endDay: 'friday',
          startHour: new Date('2010-01-01T08:00:00.000Z'),
          endHour: new Date('2010-01-01T18:00:00.000Z'),
          intervals: 60
        },
        type: 'class',
        schedule: [
          {
            level: 100,
            departmentId: 'department_id_here',
            day: 'monday',
            venueId: 'venue_id_here',
            courseId: 'course_id_here',
            event: 'lecture',
            startTime: new Date('2024-04-19T08:00:00.000Z'),
            endTime: new Date('2024-04-19T10:00:00.000Z')
          },
          // Add more schedule items as needed
        ]
      }
 */

const addTimetable = async ( req, res ) => {
    try{
        const newTimetable = new Timetable(req?.body?.schedule);
      
          // Save the new timetable
          const savedTimetable = await newTimetable.save();
    
        // Update any previous timetable with current: false
        await Timetable.updateMany(
            { _id: { $ne: savedTimetable._id } }, // Exclude the newly created timetable
            { current: false }
            );

    } catch (err) {
        console.error('Error:', err);
    }
    // Create a new timetable

    return res.status(200).json({})
}

const getTimetable = async ( req, res ) => { 
    const fetchedTimetables = 
        !(!!req.body.id) 
            ? await Timetable.find(req.body) 
                .populate('schedule.departmentId')
                .populate('schedule.courseId')
            : await Timetable.findById(req?.body?.id)
                .populate('schedule.departmentId')
                .populate('schedule.courseId')
        // .populate('schedule.venueId')
        //   .populate('schedule.userIdrs')
    console.log(req.body, fetchedTimetables, 5555)

    return res.status(200).json({timetables: fetchedTimetables})
}

const removeTimetable = async ( req, res ) => {
    let deletedRecord;

    try {
        // Find the record to be deleted
        deletedRecord = await Timetable.findOneAndDelete({ _id: req?.body?.id });
    
        if (!deletedRecord) {
          console.log('Record not found or already deleted.');
          return;
        }
    
        // Find the immediate previous record based on createdAt timestamp
        const previousRecord = await Timetable.findOne({ createdAt: { $lt: deletedRecord.createdAt } }).sort({ createdAt: -1 });
    
        if (previousRecord) {
          // Update the immediate previous record to set { current: true }
          await Timetable.findByIdAndUpdate(previousRecord._id, { current: true });
          console.log('Previous record updated successfully.');
        } else {
          console.log('No previous record found.');
        }
      } catch (error) {
        console.error('Error:', error);
      }

    return res.status(200).json({deleted: deletedRecord})
}

const makeTimetableCurrent = async ( req, res ) => {
    let updatedRecord;

    try {
            // Update any previous timetable with current: false
            updatedRecord = await Timetable.updateMany(
                { _id: { $ne: req?.body?.id } }, // Exclude the newly created timetable
                { current: false }
            );
        } catch (e) {
            console.log(e)
        }
}

module.exports = { 
    addTimetable, 
    removeTimetable, 
    getTimetable,
    makeTimetableCurrent
}