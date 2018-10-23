// npm Packages
const express = require('express');;
const bodyParser = require('body-parser');
const router = express.Router();

//aws
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const uuid = require('uuid');

// Local imports
const Document = require('mongoose').model('Document');

AWS.config.update({
    accessKeyId: "AKIAIRMIGEOQPEMEWWBQ",
    secretAccessKey: "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"
});

const s3 = new AWS.S3();

router.get('/test', (req, res) => {
    res.send('test successful');
});



//Try using this website https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property
router.post('/test-upload', (req, res) => {
    const buffer = fs.readFileSync('/testDocuments');
    const params = {Bucket: 'elasticbeanstalk-us-west-2-547258468023', Key: 'test.txt', Body: buffer};
    s3.upload(params, function(err, data) {
        console.log(err, data);
    });
});



module.exports = router;