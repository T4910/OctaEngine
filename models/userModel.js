const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        // unique: true
    },
    role: {
        type: String,
        enum: ['student', 'faculty', 'admin'],
        default: 'student'
    }
})

module.exports = mongoose.model('User', userSchema) || mongoose.models.user;