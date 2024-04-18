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
    location: String
})

module.exports = mongoose.model('Department', departmentSchema)