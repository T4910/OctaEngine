const Venue = require('../models/venueModel')

const addVenue = async ( req, res ) => {
    const fetchedVenue = await Course.find(req?.body).populate('departmentId')
    console.log(fetchedVenue, `venue${7843}`)

    return res.status(200).json({venue: fetchedVenue})
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
    const deleted = await Venue.findOneAndDelete(req?.body?.id)
    return res.status(200).json({ deleted })

}

module.exports = { addVenue, removeVenue, getVenue }