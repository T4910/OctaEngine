const Course = require('../models/courseModel')
const department = require('../models/departmentModel')
const user = require('../models/userModel')


const addCourse = async ( req, res ) => {
    let fetchedCourses;
    try{
        const [gottenDepartment] = await department.find({code: req?.body?.departmentId})
        
        console.log(department, 9823)
    
    
        fetchedCourses = await Course.create({
            title: req?.body?.title,
            code: req?.body?.code,
            level: req?.body?.level,
            description: req?.body?.description??'',
            instructor: req?.body?.instructorId,
            departmentId: gottenDepartment._id,
        });
    
        // await Course.find(req?.body).populate('departmentId')
    
        console.log(fetchedCourses, `course${8973}`)
    } catch(e) {
        console.log(e,9823)
        return res.status(200).json({courses: e})
        
    }
    return res.status(200).json({courses: fetchedCourses})
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
    const deleted = await Course.findOneAndDelete(req?.body?.id)
    return res.status(200).json({ deleted })
}

module.exports = { addCourse, removeCourse, getCourse }