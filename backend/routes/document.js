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

// var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
// AWS.config.credentials = credentials;

const s3 = new AWS.S3();

//Gets all documents 
router.get('/', (req, res) => {
    Document.find({})
        .exec().then((doc) => res.send(doc))
        .catch((err) => {
            res.send("" + err);
        });
});

//Gets a document based off fileName, returns url
router.get('/:document_id', (req, res) => {
    Document.findById(req.params.document_id).then(function(Document) { 
        const bucket = 'elasticbeanstalk-us-west-2-547258468023';
        const key = Document.fileName;
        const params = {Bucket: bucket, Key: key};
        s3.getSignedUrl('getObject', params, function(err, data) {
            res.send(data);
        })
    }).catch((err) => res.send("" + err));
});

//Posts a document
router.post('/', (req, res) => {
    var file = req.files.image;
    const bucket = 'elasticbeanstalk-us-west-2-547258468023';
    const key = file.name;
    const params = {Bucket: bucket, Key: key, Body: file.data};
    s3.upload(params, function(err, data) {
        if (err) {
            res.send("" + err)
        } else {
            Document.create({fileName: key}, (err, doc) => {
                if (err) {
                    res.send("" + err);
                } else {
                    console.log("Succesfully uploaded document");
                    res.send(doc);
                };
            });
        }
    });
});

router.post('/documentTest', (req, res) => {
    Document.create(req.body, (err, document) => {
        if (err) {
            res.send("" + err);
        } else {
            console.log("Created Document");
            res.send(document);
        }
    });
}); 

router.get('/documentTests/organizations/:organization_id', (req, res) => {
    Document.find({orgId: req.params.organization_id}).then((documents) => {
        res.send(documents);
    }).catch((err) => res.send("" + err));
});

router.get('/documentTests/mentors/:mentor_id', (req, res) => {
    Document.find({mentorId: req.params.mentor_id}).then((documents) => {
        res.send(documents);
    }).catch((err) => res.send("" + err));
});

module.exports = router;