import controller from './controller';
const passport = require('passport');
const jwt = require('jsonwebtoken');

export function setup(router) {
    router
        .get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => { res.json({user: req.user}) })
        //.get('profile', controller.getAll)
        .get('/:id', controller.get)
        .post('/register', controller.createUser) 
        .post('/login', controller.authen) 

}
