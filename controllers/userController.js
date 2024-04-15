const User = require('../models/userModel')

//? a code that picks a user role at random
let role
const roles = ['admin', 'faculty', 'student']
const pickRoles = () => {
    // select role at random
    const randomRole = Math.floor(Math.random() * roles.length)
    // set the selected role as role
    role = roles[randomRole]
}

//! login
// user? {email, password, role(value supposedly gotten from endpoint), token}
const loginUser = async (req, res) => {
    try {
        // get the user data
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields must be filled' })
        }

        // then a request should be made to a third party app for verification
        // the response is sent along with the json below

        pickRoles() // since this is a sample

        return res.status(200).json({ message: 'User login successful', email, role })
        // we're supposed to pass the user data with it
        // which includes the person's role
        // which determines the access granted to whoever is logging in
    } catch (error) {
        return res.status(400).json({ message: 'Error logging in', error })
    }
}

module.exports = { loginUser }