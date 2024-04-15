const mongoose = require('mongoose')

const { Schema } = mongoose

const issueSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'declined'],
        default: 'pending'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Issue', issueSchema)