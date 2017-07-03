import controller from './controller';
//import passport from './passport';
const passport = require('passport');
const jwt = require('jsonwebtoken');

export function  setup(router){
    router
        .get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => { res.json({user: req.user}) })
        .get('/:id', controller.getUser)
        .post('/register', controller.createUser)
        .post('/authenticate', controller.authUser)
        //.delete('/:id', controller.destroy)

}
