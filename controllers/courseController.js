const Course = require('../models/courseModel')

const addCourse = async ( req, res ) => {

    return res.status(200).json({})
}

const getCourse = async ( req, res ) => {
    const fetchedCourses = 
    !(!!req.body.id) 
        ? await Course.find(req.body).populate('departmentId')
        : await Course.findById(req?.body?.id).populate('departmentId')
    
    console.log(req.body, fetchedCourses, 9999)

    return res.status(200).json({courses: fetchedCourses})
}

const removeCourse = async ( req, res ) => {

    return res.status(200).json({})
}

module.exports = { addCourse, removeCourse, getCourse }