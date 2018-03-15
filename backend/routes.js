const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
let mongo = require('mongodb');
let url = 'mongodb://localhost:27017/stempower';
const assert = require('assert');
const fileUpload = require('express-fileupload');
router.use(fileUpload());

// YOUR API ROUTES HERE
router.get('/upload', (req, res) => {
    mongo.connect(url, function(err, db) {
       assert.equal(null, err);
       db.collection('mentor').findOne({name: req.query.name}, function(err, result) {
           if (err) throw err;
           res.send(result.raw);
           db.close();
       });
    });
});

router.post('/upload', (req, res) => {
    let metadata = JSON.parse(req.body.metadata);
    var image = {
        name: metadata.name,
        size: metadata.size,
        type: metadata.type,
        lastModified : metadata.lastModified,
        raw: req.files.file.data
    }
    console.log(image);
    mongo.connect(url, function(err, db) {
       assert.equal(null, err);
        db.collection('mentor').insertOne(image, function(err, result) {
            assert.equal(null, err);
            console.log("Image inserted");
            db.close();
            res.send("Image inserted");
        });
    });
});
module.exports = router;



