const express = require('express');
const bp = require('body-parser');
const router = express.Router();
router.use(bp.json());

var MongoClient = require('mongodb').MongoClient;

// YOUR API ROUTES HERE

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

router.post('/test', (req, res) => {
    var testDocument = {text: req.body.input};
    MongoClient.connect("mongodb://127.0.0.1:27017", function (err, conn) {
            if(err) throw err;
            var db = conn.db('stem_test');
            db.collection('test_coll', function (err, collection) {
            collection.insertOne(testDocument);
        });
    });
    res.json({result: req.body.input});
});

module.exports = router;
