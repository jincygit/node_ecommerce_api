const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');
const env = require('./environment');

// tell passport to use a new strategy for google login
// passport.use(new googleStrategy({
//         clientID: '227376046687-jfg7f0di53up97q1g4str8f443uohfa8.apps.googleusercontent.com', // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
//         clientSecret: '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', // e.g. _ASDFA%KFJWIASDFASD#FAD-
//         callbackURL: "http://localhost:8000/users/auth/google/callback",
//     },
passport.use(new googleStrategy({
    clientID: env.google_client_id,
    clientSecret: env.google_client_secret,
    callbackURL: env.google_call_back_url,
},
    function(accessToken, refreshToken, profile, done){
        // find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in google strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err, user){
                    if (err){console.log('error in creating user google strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }


));


//unique acess token
//whenever we user ce4ated we should create acesstoken

module.exports = passport;
