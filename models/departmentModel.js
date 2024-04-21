const mongoose = require('mongoose')

const { Schema } = mongoose

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    years: {
        type: Number,
        enum: [4, 5]
        // default: 4
    },
    location: String
})

module.exports = mongoose.model('Department', departmentSchema)