//mport { connectDB } from '../model'
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
import jwt from 'jsonwebtoken'
const Schema = mongoose.Schema;

//connectDB();
// User Screma
const UserSchema = mongoose.Schema ({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema, 'users');


//-------------- METHOD FOR REGISTER ------------------------//
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}   
module.exports.addUser = function(newUser){
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) reject(err)
                newUser.password = hash;
                // Mongose save user and has password to db
                newUser.save((err) => {
                    if(err) return console.log("error", err);   
                    console.log(`upate user: ${newUser.username}`)
                });
                return resolve(newUser)
            });
        });
    })
   
} 

//-------------- METHOD FOR (LOGIN) && (REGISTER) ------------------------//
module.exports.genToken = function (user){
    return jwt.sign({ sub: user._id}, 'romantic_secret', { expiresIn: '1h' })
}

//-------------- METHOD FOR AUTHENTICATION (LOGIN)------------------------//
module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}
module.exports.comparePassword = function(password, user){
     return new Promise((resolve, reject) => {
        const hash = user.password
        bcrypt.compare(password, hash, (err, isMatch) => {
            if(err) return reject (err);
            return resolve(isMatch)
        })
    })
   
}
 
