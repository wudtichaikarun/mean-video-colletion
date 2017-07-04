//import { connectDB } from '../model'
//import UsersSerializer from './serializer'

const User = require('./model');
//const passport = require('passport');
const jwt = require('jsonwebtoken');
const Promise = require ('promise');

//connectDB();
const UsersController = {

    getUser(req, res, next){
        const authHeader = req.header('Authorization')
        const accessToken = authHeader.match(/JWT (.*)/)[1]
        console.log("get by id is-------->"+ authHeader);
        console.log("accessToken-------->" + accessToken)
        console.log("----->"+ req.user)
    },

    getUserData(req, res){
        console.log("req = "+req.user)       
    },

    //-------------- METHOD FOR REGISTER ------------------------//
    createUser(req, res, next){
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        User.addUser(newUser).then(
            (user, err) => {
                if (err){
                    res 
                        .status(401)
                        .json({ success: false, msg:'Failed to register user'}); 
                }else{
                    res
                        .header('Authorization', `JWT ${User.genToken(user)}`)
                        .status(201)
                        .json({ success: true, msg: 'User registered'});
                        //.json({ user: UsersSerializer.for('create', user)})
                }
                
            }
        )
    },

    //-------------- METHOD FOR AUTHENTICATION (LOGIN)------------------------//
    authen(req, res){
        const username = req.body.username;
        const password = req.body.password;
        console.log(`username is: ${username} && password is: ${password} `)

        User.getUserByUsername(username, (err, user) => {
            if(err) return (err);
            if(!user){
                return res.json({ success: false, msg:'User not found'});
            }
            // Promise
            User.comparePassword(password, user).then(isMatch => {
                if(isMatch){
                    res
                        .header('Authorization', `JWT ${User.genToken(user)}`)
                        .status(201)
                        .json({ success: true, msg: 'Logeedin success'});
                        console.log(`User name and password is ${isMatch}`)
                } else{
                    res
                        .status(401)
                        .json({ success: false, msg:'Wrong password'})
                }
            })
        })
    }
    //     User.addUser(newUser, (err, user) => {
    //         if(err){
    //             res.json({ success: false, msg:'Failed to register user'});
    //         }else{;
    //             res.json({ success: true, msg: 'User registered'});
    //         }
    //     });
    // },
    // POST authentication user
//     authUser(req, res){
//         const username = req.body.username;
//         const password = req.body.password;

//         User.getUserByUsername(username, (err, user) => {
//             if(err) return (err);
//             if(!user){
//                 return res.json({ success: false, msg:'User not found'});
//             }
//             // Promise
//             User.comparePassword(password, user.password,(err, isMatch) => {
//                 if(err) return (err);
//                 if(isMatch){
//                     const token = jwt.sign({_id:user._id, username: user.username}, 'romantic_cecret', {
//                         expiresIn: 604800 // 1 week
//                     });
//                     res 
//                         .header('access-token', `JWT ${User.genToken(user)}`)
//                         .status(201)
//                         //.json({ success: true })
//                         .json({ success: true, token: 'JWT '+token, user: { id: user._id, name: user.username, email: user.email } })
//                 } else{
//                     res
//                         //.status(401)
//                         .json({ success: false, msg:'Wrong password'})
//                 }
//             });

//         });
//     }
 }
export default UsersController