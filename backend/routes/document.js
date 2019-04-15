// npm Packages
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

//aws
const AWS = require("aws-sdk");
const fs = require("fs");
const fileType = require("file-type");
const bluebird = require("bluebird");
const uuid = require("uuid");

// Local imports
const Document = require("mongoose").model("Document");
const User = require("mongoose").model("User");

// var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
// AWS.config.credentials = credentials;

const s3 = new AWS.S3();

//Gets all documents
router.get("/", (req, res) => {
  console.log(" I CAME HERE!");
  Document.find({})
    .exec()
    .then(doc => res.send(doc))
    .catch(err => {
      res.send("" + err);
    });
});

//Gets a document based off fileName, returns url
router.get("/get_doc_by_id/:document_id", (req, res) => {
  Document.findById(req.params.document_id)
    .then(function(Document) {
      const bucket = "elasticbeanstalk-us-west-2-547258468023";
      const params = 
      { Bucket: bucket, 
        Key: req.params.document_id , 
        ResponseContentDisposition: 'attachment; filename ="' + Document.fileName + '"'
      };
      s3.getSignedUrl("getObject", params, function(err, data) {
        res.send(data);
      });
    })
    .catch(err => res.send("" + err));
});

//Get documents of a specific person
router.get("/get_documents", (req, res) => {
  Document.find({ owner: req.session.userId })
    .then(documents => {
      res.send(documents);
    })
    .catch(err => res.status(500).send("" + err));
});

//Get documents of a specific person
router.get("/get_documents_test/:userId", (req, res) => {
  Document.find({ owner: req.params.userId })
    .then(documents => {
      res.send(documents);
    })
    .catch(err => res.status(500).send("" + err));
});

//Posts a document
router.post("/", (req, res) => {
  var file = req.files.file;
  const bucket = "elasticbeanstalk-us-west-2-547258468023";
  const key = file.name;

  //check if user is logged in
  User.findById(req.session.userId, (err, result) => {
    if (err || result == null) {
      res.status(200).send("Login Before Uploading Documents");
    } else {
      let document = {
        fileName: key,
        owner: req.session.userId,
        documentType: req.body.documentType
      };
      //Try adding doc to server db (only key and other data)
      Document.create(document, (err, doc) => {
        if (err) {
          res.send("" + err);
        } else {
          // Upload document to s3 server
          const params = {
            Bucket: bucket,
            Key: doc._id.toString(),
            Body: file.data
          };
          // res.send(doc);
          s3.upload(params, function(err, data) {
            if (err) {
              res.send("" + err);
            } else {
              console.log("Succesfully uploaded document");
              res.send(data);
            }
          });
        }
      });
    }
  });
});

module.exports = router;