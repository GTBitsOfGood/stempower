//npm Packages
const express = require('express');;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

//MongoDB
const mongo = require('mongodb');
const dbclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/stempower';

//Passport configuration
const passport = require('passport');
const expressSession = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const { check, oneOf, validationResult } = require('express-validator');

//Local imports (currently just user)
const user = require('../models/user');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));
router.use(passport.initialize());
router.use(passport.session());
router.use(expressSession({secret: 'mySecretKey'}));

//Main login strategy
passport.use(new LocalStrategy(
    function(username, password, done) { 
    //Checks if user exists or not based on username
    user.findOne({ 'username' :  username }, 
        function(err, user) {
        if (err) {
            console.log("Error finding username");
            return done(err);
        }
        // username does not exist, log error & redirect back
        if (!user) {
            console.log('user ${username} not found');
            return done(null, false);                
        }
        // user exists due to wrong password
        if (!user.verifyPassword(password)) {
            console.log('Invalid Password');
            return done(null, false);
        }
        // user and password both match, return user from 
        // done method which will be treated like success
        return done(null, user);
    });
}));

//Serialize and deserializing user instances/ session management
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    user.findById(id, function(err, user) {
        done(err, user);
    });
});

//All of the main routs for logging in/ out, etc

//TEST
router.get('/getUsers', (req, res) => {
    console.log("getUsers call is made");
    dbclient.connect(url, (err, client) => {
        if (err) {
            console.log("err" + err);
        } else {
            const db = client.db('mentor');
            const add = db.collection('mentor').find().toArray();
            res.send(add);
        }
        client.close();
    });
});

router.post('/newUser', (req, res) => {
    console.log("newUser call is made");
    let newUser = {name: "Sean", email: "seanwalsh@gatech.edu", password: "password"};
    dbclient.connect(url, (err, client) => {
        if (err) {
            console.log("err" + err);
        } else {
            const db = client.db('mentor');
            db.collection('mentor').insertOne(newUser, function(err, results) {
                if (err) throw err;
                res.send(res.raw);
            });
        }
        client.close();
    });
});

 // GET for list of all users
// router.get('/getUsers', (req, res) => {
//     console.log("getUsers call is made");
//     user.find({})
//     .exec()
//     .then((user) => res.send(user))
//     .catch((err) => {
//       res.send("" + err);
//     });
// });

//POSTs a new user
// router.post('/newUser', (req, res) => {
//     console.log("New user created")
//       user.create(req.body, (err, user) => {
//         if(err) {
//           res.send("" + err);
//         } else {
//           console.log(user);
//           res.send(user);
//     }})
//   });
   
// Handle Login POST
router.post('/login', (req, res) => {
    passport.authenticate('local', (errors, user) => {
      req.logIn(user, () => {
        if (errors) {
            return res.status(500).json({ errors });
        }
        return res.status(user ? 200 : 400).json(user ? { user } : { errors: "Login Failed" });
      });
    })(req, res);
});

// POST that handles user logout given a specific ID
router.post('/user/logout/:id', (req, res) => {
    user.findByIdAndUpdate({
        _id: req.params._id
    }, {
        login: false
    }, function(err, docs) {
        if (err) {
            res.json(err);
        } else {
            console.log("successful");
            res.json("logged out!")
        }
    })
});

// POST that updates a specific password
router.post('/updatePassword/:_id', (req, res) => {
  user.findByIdAndUpdate({
    _id: req.params._id
}, {
    password: req.body.password
}, function(err, docs) {
    if (err) {
        res.json(err);
    } else {
        console.log("successful");
        res.json("password updated!")
    }
})
});

module.exports = router; 