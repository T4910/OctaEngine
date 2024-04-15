const mongoose = require('mongoose')

const { Schema } = mongoose

const reportSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['category1', 'category2', 'etc'],
        required: true
    },
    attachments: {
        type: Object,
        default: null
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Report', reportSchema)