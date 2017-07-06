import jwt from 'jsonwebtoken'
//import config from '../config'  //call secreat key 'romantic_secret'
//import { User } from '../app/users/model'
const User = require('../app/users/model');

export default function(req, res, next){
    const authHeader = req.header('Authorization')
    if(!authHeader) return next()
    console.log(` :-------> authHeader jwt token value: ${authHeader} `)
    // select only token not need Bearer use regulaexpression /JWT (.*)/
    const accessToken = authHeader.match(/JWT (.*)/)[1]
    jwt.verify(accessToken, 'romantic_secret', (err, decoded) => {
        console.log(` :-------> decoded value: ${decoded.sub} `)
        if(err) return next()
        req.user = User.getUserById(decoded.sub)
        console.log(User.getUserById(decoded.sub))
        next()
    })
}


// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// // const User = require('./model');
// // //const config = require('../../config/database');

// module.exports = function(passport){
//     let opts = {};
//     opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
//     opts.secretOrKey = 'romantic_cecret';
//     passport.use(new JwtStrategy(opts, (jwr_payload, done) =>{
//         console.log(jwr_payload);
//         User.getUserById(jwr_payload._id, (err, user) => {
//             if(err){
//                 return done(err, false);
//             }else if(user){
//                 return done(null, user);
//             }else{
//                 return done(null, false);
//             }
//         });
//     }));
// }