require("dotenv").config();
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const { User } = require('../db');

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3001/auth/google/callback',
    scope: ['profile', 'email'],
  },
  async function(accessToken, refreshToken, profile, done) {
    try {
      let user = await User.findOne({ where: { googleId: profile.id } });
      if (!user) {
        user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,

        });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

module.exports = passport;
