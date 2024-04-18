const mongoose = require('mongoose')

const { Schema } = mongoose

const venueSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    capacity:  Number,
    location: String
})

module.exports = mongoose.model('Venue', venueSchema)