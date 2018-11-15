const express = require('express');
const bodyParser = require('body-parser');
const assert = require('assert');
const dbclient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/stempower';
const fileUpload = require('express-fileupload');
const user = require('./routes/user');
const mentor = require('./routes/mentor');
const organization = require('./routes/organization');
const doc = require('./routes/document');
const upload = require('./routes/upload');
const files = require('./routes/files');

const router = express.Router();
router.use(bodyParser.json());
router.use(fileUpload());

router.use('/user', user)
router.use('/mentors', mentor);
router.use('/organizations', organization);
router.use('/documents', doc);
router.use('/files', files);
router.use('/upload', upload);


// YOUR API ROUTES HERE
router.get('/test', (req, res) => {
    res.send("/api test successful");
});

module.exports = router;