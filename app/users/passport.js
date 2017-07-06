const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./model');
const config = require('../../config/config');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwr_payload, done) =>{
        console.log(jwr_payload)
        User.getUserById(jwr_payload.sub, (err, user) => {
            console.log("---> get id from token :users/passport.js = "+jwr_payload.sub)
            if(err){
                return done(err, false);
            }
            if(user){
                console.log("---> get user by method getUserById :users/passport.js = ",user)
                return done(null, user);
            }else{
                return done(null, false);
            }
        });
    }));
}