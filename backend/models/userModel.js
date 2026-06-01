// import mongoose
const mongoose = require('mongoose');

// import bcrypt 
const bcrypt = require('bcrypt');

// import validator
const validator = require('validator');



const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required :true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

// static sign up method
userSchema.statics.signup = async function (email, password){
    const exists = await this.findOne({email})

    // Check email & password is given if not then throw error 
    if(!email || !password){
        throw Error('All fields are mandatory')
    }

    // check the email format is right if not then throw error
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    // check the password strong is right if not then throw error
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not Strong')
    }

    if(exists){
        throw Error('Email already exists!')
    }

    // for salt to encryp the password 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash});

    return user;


} 

// static log in method
userSchema.statics.login = async function (email, password){

    // Check email & password is given if not then throw error 
    if(!email || !password){
        throw Error('All fields are mandatory')
    }
    
    const user = await this.findOne({email})

    if(!user){
        throw Error('Incorrect Email!')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password!')
    }

    return user;
}
module.exports = mongoose.model('User', userSchema);