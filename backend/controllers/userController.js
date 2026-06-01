const User = require('../models/userModel')

// Log in  user
const loginUser = async(req, res) => {
    res.json({msg: 'Login User'})
}

// Sign Up user
const signupUser = async(req, res) => {
    res.json({msg: 'Sign Up User'})
}

module.exports ={
    loginUser,
    signupUser
}