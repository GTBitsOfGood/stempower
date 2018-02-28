const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
let mongo = require('mongodb');
let url = 'mongodb://localhost:27017/stempower';
const assert = require('assert');

// YOUR API ROUTES HERE
router.post('/upload', (req, res) => {
    var image = {
        name: req.body.name,
        size: req.body.size,
        type: req.body.type,
        lastModified : req.body.lastModified
    }
    mongo.connect(url, function(err, db) {
       assert.equal(null, err);
        db.collection('mentor').insertOne(image, function(err, result) {
            assert.equal(null, err);
            console.log("Image inserted");
            db.close();
        });
    });
});
module.exports = router;



