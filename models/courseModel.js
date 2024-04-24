const mongoose = require('mongoose')

const { Schema } = mongoose

const courseSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    instructor: // {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // } || 
    String,
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema)