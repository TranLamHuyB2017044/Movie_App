const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const {ExtractJwt} = require('passport-jwt')
const {JWT_SECRET} = require('../config')

const User = require('../services/user.service')

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
    secretOrKey: JWT_SECRET,
}, async (payload, done) =>{
    try {
        const user = await User.findById(payload.sub)
        if(!user) return done(null, false);
        done(null,user);
    } catch (error) {
        done(error, false)
    }
}))

// passport local 

passport.use(new LocalStrategy({
    usernameField: 'username',
    session:false,
}, async (userName, passWord, done) => {
    try {
        const user = await User.findOne({username: userName})
        if(!user) return done(null, false)
        const isCorrectPassword = await user.isValidPassword(passWord)
        if(!isCorrectPassword) return done(null, false)
        done(null, user)
    } catch (error) {
        done(error, false);
    }
}))