import jwt from 'jsonwebtoken'
//import config from '../config'  //call secreat key 'romantic_secret'
//import { User } from '../app/users/model'
const User = require('../app/users/model');

export default function(req, res, next){
    const authHeader = req.header('Authorization')
    if(!authHeader) return next()
    console.log(`-------> authHeader jwt token value: ${authHeader} `)
    // select only token not need Bearer use regulaexpression /JWT (.*)/
    const accessToken = authHeader.match(/JWT (.*)/)[1]
    jwt.verify(accessToken, 'romantic_secret', (err, decoded) => {
        console.log(`-------> decoded value: ${decoded.sub} `)
        if(err) return next()
        req.user = User.getUserById(decoded.sub)
        console.log(User.getUserById(decoded.sub))
        next()
    })
}
