const mongoose = require('mongoose')

const { Schema } = mongoose

const timetableSchema = new Schema({
    semester: {
        type: String,
        enum: ['alpha', 'omega'],
        required: true
    },
    academicYear: {
        type: String,
        required: true
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    timetableType: {
        type: String,
        enum: ['class', 'exam'],
        // default: 'class',
        required: true
    }
})

module.exports = mongoose.model('Timetable', timetableSchema)