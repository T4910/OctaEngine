const User = require('../models/userModel')


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            // User with the email does not exist
            console.log('User with this email does not exist.');
            // You can choose to send an appropriate response to the client or perform any other action.
            return res.status(400).json({ message: 'User doesnt exist' })
        }
        
        if (user.password !== password) {
            // Password is incorrect
            console.log('Incorrect password.');
            // You can choose to send an appropriate response to the client or perform any other action.
            return res.status(400).json({ message: 'Incorrect details' })
        }
    
        console.log('User logged in successfully.');
        // You can send a success response to the client.
        console.log(user, 23)
        return res.status(200).json({ message: 'User login successful', ...user })
    
    } catch (err) {
        console.error('Error logging in user:', err);
        return res.status(400).json({ message: 'Error logging in', err })
        // You might want to send a generic error response to the client in this case.
    }
};   

const createUser = async (req, res) => {
    try{
        const { email, password, role } = req.body;
        const newUser = await User.create({ 
            email,
            password,
            role
        });

        // Send a response back to the client
        return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch(err) {
        if (err.code === 11000 || err.code === 11001){
            // Handle the duplicate key error
            console.log('User with this email already exists.');
            // You can choose to send an appropriate response to the client or perform any other action.        
            return res.status(400).json({ message: 'User with this email already exists'})
            
        } else {
            // Handle other types of errors
            console.error('Error creating user:', err);
            return res.status(400).json({ message: 'Error creating user', error: err })
            // You might want to send a generic error response to the client in this case.
        }

    }
};

const getUser = async (req, res) => {
    try {
        const users = await User.find(!!req?.body?.email ? {email: req?.body?.email} : {});
        return res.status(200).json({ message: 'Users retrieved successfully', users });
    } catch (err) {
        console.error('Error getting users:', err);
        return res.status(400).json({ message: 'Error getting users', err });
    }
};

module.exports = {
    loginUser,
    createUser,
    getUser
}