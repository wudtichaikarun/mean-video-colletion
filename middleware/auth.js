import jwt from 'jsonwebtoken'
 //call secreat key 'romantic_secret'
const config = require('../config/config')
//import { User } from '../app/users/model'
const User = require('../app/users/model');

export default function(req, res, next){
    const authHeader = req.header('Authorization')
    if(!authHeader) return next()
    // select only token not need Bearer use regulaexpression /JWT (.*)/
    const accessToken = authHeader.match(/JWT (.*)/)[1]
    //console.log(accessToken)
    jwt.verify(accessToken, config.secret, (err, decoded) => {
        //console.log(decoded.sub)
        if(err) return next()
        User.getUserById(decoded.sub)
        .then((msg)=>{
            var user = msg
            user = user[0]
            //console.log(user)
            req.user = user
            next()
        })
 
    })
}
