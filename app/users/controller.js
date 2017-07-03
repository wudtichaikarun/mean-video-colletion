//import { connectDB } from '../model'
//import UsersSerializer from './serializer'
const User = require('./model');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Promise = require ('promise');

//connectDB();
const UsersController = {
    Passport(){
        function checkPassport (){
            return new Promise (function(resolve, reject){
                 resolve (passport.authenticate('jwt', {session:false}))
            })
        }   
    },
    // GET user by id
    // getUser(req, res, next){
    //     console.log("get by id is:"+req.user);
    //     User.getUserById(id, callback);
    // },
    // GET all users
    getAllUser(req , res, next){
        res.json({user: req.user}) 
            
    },
    // POST add new user
    createUser(req, res, nexr){
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        User.addUser(newUser).then(
            (err, user) => {
                if (err){
                    res 
                        .status(401)
                        .json({ success: false, msg:'Failed to register user'}); 
                }else{
                    res
                        //.header('id_token', `JWT ${User.genToken(user)}`)
                        .status(201)
                        .json({ success: true, msg: 'User registered'});
                        //.json({ user: UsersSerializer.for('create', user)})
                }
                
            }
        )
    },
    //     User.addUser(newUser, (err, user) => {
    //         if(err){
    //             res.json({ success: false, msg:'Failed to register user'});
    //         }else{;
    //             res.json({ success: true, msg: 'User registered'});
    //         }
    //     });
    // },
    // POST authentication user
    authUser(req, res){
        const username = req.body.username;
        const password = req.body.password;

        User.getUserByUsername(username, (err, user) => {
            if(err) return (err);
            if(!user){
                return res.json({ success: false, msg:'User not found'});
            }
            // Promise
            User.comparePassword(password, user.password,(err, isMatch) => {
                if(err) return (err);
                if(isMatch){
                    const token = jwt.sign({_id:user._id, username: user.username}, 'romantic_cecret', {
                        expiresIn: 604800 // 1 week
                    });
                    res 
                        //.header('id_token', `JWT ${User.genToken(user)}`)
                        .status(201)
                        //.json({ success: true })
                        .json({ success: true, token: 'JWT '+token, user: { id: user._id, name: user.username, email: user.email } })
                } else{
                    res
                        //.status(401)
                        .json({ success: false, msg:'Wrong password'})
                }
            });

        });
    }
}
export default UsersController