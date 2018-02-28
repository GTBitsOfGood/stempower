const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {check, oneOf, validationResult} = require('express-validator/check');
const User = require('./user');
const db = 'C:\MongoDB\data\db\stempower';

mongoose.Promilse = global.Promise;
mongoose.connect(db);
console.log(db);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.route('/').get((req, res) => {
    console.log("Reached basic '/' route");
});

module.exports = router;
