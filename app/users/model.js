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
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema, 'users');

module.exports.getUserById = function(id, callback){
    console.log("deconde id ="+id)
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser){
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err)  reject (err)
                newUser.password = hash;
                newUser.save(resolve);
            });
        });
    })
   
} 

module.exports.genToken = function (user){
    return jwt.sign({ sub: user.id }, 'romantic_secret', { expiresIn: '1h' })
  }

// module.exports.addUser = function(newUser, callback){
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if(err) throw err;
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     });
// }   

module.exports.comparePassword = function(candidatePassword, hash, callback){
     //return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if(err)  throw err;
            callback (null, isMatch)
        })
    //})
   
}