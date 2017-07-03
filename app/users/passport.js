const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./model');
//const config = require('../../config/database');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = 'romantic_cecret';
    passport.use(new JwtStrategy(opts, (jwr_payload, done) =>{
        console.log(jwr_payload);
        User.getUserById(jwr_payload._doc._id, (err, user) => {
            if(err){
                return done(err, false);
            }else if(user){
                return done(null, user);
            }else{
                return done(null, false);
            }
        });
    }));
}