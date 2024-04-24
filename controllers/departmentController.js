const Department = require('../models/departmentModel')

const addDepartment = async ( req, res ) => {
    let fetchedDepartment; 
    try{
        fetchedDepartment = await Department.create({
            name: req?.body?.name,
            code: req?.body?.code?.toLowerCase(),
            location: req?.body?.location??'',
            years: req?.body?.years??4
        })
        console.log(fetchedDepartment, `depart${9843}`)

    } catch (e) {
            console.log(e,89988)
        return res.status(200).json({department: e})
    }

    return res.status(200).json({department: fetchedDepartment})
}

const getDepartment = async ( req, res ) => {
    const fetchedDepartment = 
    !(!!req.body.id) 
        ? await Department.find(req.body)
        : await Department.findById(req?.body?.id)
    
    console.log(req.body, fetchedDepartment, 9999)

    return res.status(200).json({department: fetchedDepartment})
}

const removeDepartment = async ( req, res ) => {
    const deleted = await Department.findOneAndDelete(req?.body?.id)
    return res.status(200).json({ deleted })

}

module.exports = { addDepartment, removeDepartment, getDepartment }