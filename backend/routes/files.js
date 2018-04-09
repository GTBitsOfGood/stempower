const express = require('express');
const bodyParser = require('body-parser');
const assert = require('assert');
const dbclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/stempower';

const router = express.Router();
router.use(bodyParser.json());

router.get('/profilePicture/:id', (req, res) => {
    dbclient.connect(url, (err, database) => {
       assert.equal(null, err);
       const myDb = database.db("stempower");
       myDb.collection('mentor').findOne({"id": parseInt(req.params.id)}, function(err, result) {
           if (err) throw err;
           if (result == null) {
            res.send();
           } else {
             res.send(result.raw);
           }
       });
       database.close();
    });
});

router.post('/profilePicture', (req, res) => {
    let metadata = JSON.parse(req.body.metadata);
    dbclient.connect(url, (err, database) => {
       assert.equal(null, err);
       const myDb = database.db("stempower");
        myDb.collection('mentor').updateOne({"id" : metadata.id}, {$set: {
          "size": metadata.size,
          "type": metadata.type,
          "raw": req.files.file.data
        } }, {upsert: true},
          function(err, result) {
            assert.equal(null, err);
            console.log("Image inserted");
            res.send("Image inserted");
        });
        database.close();
    });
});
module.exports = router;



