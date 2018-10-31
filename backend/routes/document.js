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


//Gets all documents 
router.get('/', (req, res) => {
    Document.find({})
        .exec().then((doc) => res.send(doc))
        .catch((err) => {
            res.send("" + err);
        });
});

/*Gets a document based off id

**Important Notes**
1. Gets a document based off id, but key(document name) and file type is currently hard-coded
2. In the future, file type should be dynamically chosen
*/
router.get('/:document_id', (req, res) => {
    const bucket = 'elasticbeanstalk-us-west-2-547258468023';
    const key = 'test.png';
    const params = {Bucket: bucket, Key: key};
    s3.getObject(params, function(err, data) {
        res.attachment("received.png");
        res.send(data.Body);
    })
});

/*Posts a document

**Important Notes**
1.This route currently reads the document at the root directory (C: for Windows, Users for Mac)
2. The key(document name) is currently hard coded
3. Rather than saving the url of the document location, currently the path is being saved 

*/
router.post('/', (req, res) => {
    const buffer = fs.readFileSync(req.body.path);
    const bucket = 'elasticbeanstalk-us-west-2-547258468023';
    const key = 'test.png';
    const params = {Bucket: bucket, Key: key, Body: buffer};
    s3.upload(params, function(err, data) {
        console.log(err, data);
    });
    Document.create(req.body, (err, doc) => {
        if (err) {
            res.send("" + err);
        } else {
            console.log("Succesfully uploaded document");
            res.send(doc);
        }
    });
});

module.exports = router;