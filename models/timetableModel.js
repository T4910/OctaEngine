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
    timing: {
        startDay: {
            type: String,
            enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            default: 'monday',            
            required: true
        },
        endDay: {
            type: String,
            enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            default: 'friday',
            required: true
        },
        startHour: {
            type: Date,
            default: new Date('2010-01-01T08:00:00.000Z'),
            required: true
        },
        endHour: {
            type: Date,
            default: new Date('2010-01-01T18:00:00.000Z'),
            required: true
        },
        intervals: {
            type: Number,
            required: true,
            enum: [20, 30, 60], // minutes
            default: 60
        }
    },
    level: {
        type: Number,
        enum: [100, 200, 300, 400, 500],
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    type: {
        type: String,
        enum: ['class', 'exam'],
        default: 'class',
        required: true
    },
    schedule: [
        {
            day: {
                type: String,
                enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            },
            venueId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Venue',
                required: true
            },
            courseId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            },
            event: {
                type: String,
                enum: ['lecture', 'chapel-service', 'inaugral-lecture'],
                required: true
            },
            coordinator: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            } || String,
            startTime: Date,
            endTime: Date,
        }
    ]
})

module.exports = mongoose.model('Timetable', timetableSchema)