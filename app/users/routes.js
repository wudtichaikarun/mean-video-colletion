import controller from './controller';
//import passport from './passport';
const passport = require('passport');
const jwt = require('jsonwebtoken');

export function setup(router) {
    router
        //.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => { res.json({user: req.user}) })
        .get('profile', controller.getUserData)
        .get('/:id', controller.getUser)
        .post('/register', controller.createUser) 
        .post('/login', controller.authen) 

}
