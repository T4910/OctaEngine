const mongoose = require('mongoose')

const { Schema } = mongoose

const courseSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema)