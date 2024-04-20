const Department = require('../models/departmentModel')

const addDepartment = async ( req, res ) => {

    return res.status(200).json({})
}

const getDepartment = async ( req, res ) => {
    const fetchedDeparment = 
    !(!!req.body.id) 
        ? await Department.find(req.body)
        : await Department.findById(req?.body?.id)
    
    console.log(req.body, fetchedDeparment, 9999)

    return res.status(200).json({department: fetchedDeparment})
}

const removeDepartment = async ( req, res ) => {

    return res.status(200).json({})
}

module.exports = { addDepartment, removeDepartment, getDepartment }