//npm imports
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {check, oneOf, validationResult} = require('express-validator/check');

//local imports
const user = require('./user');

const db = 'C:\data\db\stempower';

mongoose.Promilse = global.Promise;
mongoose.connect(db);
console.log(db);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.route('/').get((req, res) => {
    console.log("Basic '/' in index.js works!");
    res.send("Basic '/' in index.js works!");
})

//RESTful endpoints (currently just user)
router.use('/user', user);

module.exports = router;
