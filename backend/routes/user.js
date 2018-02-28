//npm Packages
const express = require('express');;
const mongoose = require('mongoose');
const router = express.Router();

//User Model Import
const User = require('../models/user');

//Passport configuration
const passport = require('passport');
const expressSession = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const { check, oneOf, validationResult } = require('express-validator');
router.use(expressSession({secret: 'mySecretKey'}));
router.use(passport.initialize());
router.use(passport.session());

//Serialize and deserializing user instances/ session management
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

//Main login strategy
passport.use('login', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) { 
    //Checks if user exists or not based on username
    User.findOne({ 'username' :  username }, 
        function(err, user) {
        if (err)
            return done(err);
        // Username does not exist, log error & redirect back
        if (!user){
            console.log('User ${username} not found');
            return done(null, false, 
                req.flash('message', 'User Not found.'));                 
        }
        // User exists due to wrong password
        if (!isValidPassword(user, password)){
            console.log('Invalid Password');
            return done(null, false, 
              req.flash('message', 'Invalid Password'));
        }
        // User and password both match, return user from 
        // done method which will be treated like success
        return done(null, user);
    });
}));

//Main signup strategy
passport.use('signup', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) {
        findOrCreateUser = function(){
            //Looks for a user based on username
            User.findOne({'username':username},function(err, user) {
                if (err){
                    console.log('Error in SignUp: '+err);
                    return done(err);
                }
            //Checks for if a user already exists
            if (user) {
                console.log('User already exists');
                return done(null, false, 
                req.flash('message','User Already Exists'));
            } else {
                //Creates user if email doesn't exist
                var newUser = new User();
                newUser.username = username;
                newUser.password = createHash(password);
                newUser.email = req.param('email');
                newUser.firstName = req.param('firstName');
                newUser.lastName = req.param('lastName');
 
             //Saves user
            newUser.save(function(err) {
                if (err){
                    console.log('Error in Saving user: '+err);  
                    throw err;  
                }
                console.log('User Registration succesful');    
                return done(null, newUser);
                });
            }
        });
    };
     
    // Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    //** ASK about using 'tick' on process later */
    process.nextTick(findOrCreateUser);
  })
);

//Checks for a valid password
let isValidPassword = function(user, password){
    return bCrypt.compareSync(password, user.password);
}

//Creates a password hash
var createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

//All of the main routs for logging in/ out, etc.
module.exports = function(passport){
 
    // GET login page
    router.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('index', { message: req.flash('message') });
    });
   
    // Handle Login POST
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash : true 
    }));
   
    // GET Registration Page
    router.get('/signup', function(req, res){
        res.render('register',{message: req.flash('message')});
    });
   
    // Handle Registration POST
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true 
    }));
   
    return router;
}

//Route for logging out
router.get('/signout', function(req, res) {
    console.log("Signout reached");
    req.logout();
    res.redirect('/');
});

//Will call 'dashboard' that Sophia/ Devany are designing
//**Note dashboard doesn't exist yet and will fail if called
// router.get('/dashboard', isAuthenticated, function(req, res){
//     res.render('dashboard', { user: req.user });
// });
   
//Final authentication check
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {}
        return next();
    res.redirect('/');
}

// module.exports = router; 