import { connectDB } from '../model'
const User = require('./model');
const passport = require('passport');
const jwt = require('jsonwebtoken');

connectDB();
const UsersController = {

    //Passport
    // Passport(){
    //      new Promise (function (){
    //         passport.authenticate('jwt',{ session:false })
    //     })
    // },
    // GET user by id
    getUser(req, res, next){
        console.log("get by id is:"+req.user);
        //User.getUserById(id, callback);
    },
    // GET all users
    getAllUsers(req, res, next){
        passport.authenticate('jwt', {session:false})
        res.json({user: req.user})  
        console.log("hello profile")  
    },
    // POST add new user
    createUser(req, res, nexr){
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        User.addUser(newUser, (err, user) => {
            if(err){
                res.json({ success: false, msg:'Failed to register user'});
            }else{;
                res.json({ success: true, msg: 'User registered'});
            }
        });
    },
    // POST authentication user
    authUser(req, res, next){
        const username = req.body.username;
        const password = req.body.password;

        User.getUserByUsername(username, (err, user) => {
            if(err) throw err;
            if(!user){
                return res.json({ success: false, msg:'User not found'});
            }

            User.comparePassword(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch){
                    const token = jwt.sign(user, 'romantic_cecret', {
                        expiresIn: 604800 // 1 week
                    });
                    res.json({
                        success: true,
                        token: 'JWT '+token,
                        user: {
                            id: user._id,
                            name: user.username,
                            email: user.email
                        }
                    });
                } else{
                    return res.json({ success: false, msg:'Wrong password'});
                }
            });

        });
    }
}
export default UsersController