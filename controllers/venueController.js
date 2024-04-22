const Venue = require('../models/venueModel')

const addVenue = async ( req, res ) => {

    return res.status(200).json({})
}
const getVenue = async ( req, res ) => {
    const fetchedVenue = 
    !(!!req.body.id) 
        ? await Venue.find(req.body)
        : await Venue.findById(req?.body?.id)
    
    console.log(req.body, fetchedVenue,10109)

    return res.status(200).json({venue: fetchedVenue})
}
const removeVenue = async ( req, res ) => {

    return res.status(200).json({})
}

module.exports = { addVenue, removeVenue, getVenue }