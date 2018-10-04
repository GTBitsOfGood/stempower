const express = require('express');
const bodyParser = require('body-parser');
const assert = require('assert');
const dbclient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/stempower';
const fileUpload = require('express-fileupload');
const users = require('./routes/user');
const mentor = require('./routes/mentor');
const upload = require('./routes/upload');
const files = require('./routes/files');

const router = express.Router();
router.use(bodyParser.json());
router.use(fileUpload());

router.use('/mentors', mentor);
router.use('/upload', upload);
router.use('/files', files);  // set to delete next iteration


// YOUR API ROUTES HERE
router.get('/test', (req, res) => {
    res.send("/api test successful");
});

module.exports = router;