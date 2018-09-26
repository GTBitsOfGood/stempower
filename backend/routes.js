const express = require('express');
const bodyParser = require('body-parser');
const assert = require('assert');
const dbclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/stempower';
const fileUpload = require('express-fileupload');
const users = require('./routes/user');
const mentor = require('./routes/mentor');
const files = require('./routes/files');

const router = express.Router();
router.use(bodyParser.json());
router.use(fileUpload());

router.use('/mentors', mentor);
router.use('/files', files);


// YOUR API ROUTES HERE
router.get('/test', (req, res) => {
    res.send("/api test successful");
});

module.exports = router;