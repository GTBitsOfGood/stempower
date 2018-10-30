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

router.get('/', (req, res) => {
    const bucket = 'elasticbeanstalk-us-west-2-547258468023';
    const key = 'test.txt';
    const params = {Bucket: bucket, Key: key};
    s3.getObject(params, function(err, data) {
        console.log(err, data);
    });
});

router.post('/', (req, res) => {
    const buffer = fs.readFileSync('/test.txt');
    const bucket = 'elasticbeanstalk-us-west-2-547258468023';
    const key = 'test.txt';
    const params = {Bucket: bucket, Key: key, Body: buffer};
    s3.upload(params, function(err, data) {
        console.log(err, data);
    });
    res.send("https://" + bucket + ".s3.amazonaws.com/" + key);
});

module.exports = router;