const mongoose = require('mongoose')

const { Schema } = mongoose

const activitySchema = new Schema({
    activityType: {
        type: String,
        enum: ['class-course', 'chapel-service', 'inaugural-lecture', 'etc'],
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }
})