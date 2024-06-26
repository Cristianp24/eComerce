require("dotenv").config();
const User = require("../db");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const { Sequelize } = require("sequelize");


passport.use(new GoogleStrategy({
 clientID: process.env.GOOGLE_CLIENT_ID,
 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
 callbackURL: "/auth/google/callback",
 scope: ["profile", "email"]
 },
 function(accessToken, refreshToken, profile, cb) {
 console.log(profile)
 return cb(null, profile);

 }
));


passport.serializeUser( (user, done) => {
 done(null, user)
})

passport.deserializeUser( (user, done) => {
 done(null, user)
})


module.exports = passport