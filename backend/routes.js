const express = require('express');
const bodyParser = require('body-parser');
const assert = require('assert');

const mongo = require('mongodb');
const dbclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/stempower';
const fileUpload = require('express-fileupload');
const user = require('./routes/user');
const mentor = require('./routes/mentor');

const router = express.Router();
router.use(bodyParser.json());
router.use(fileUpload());
router.use('/user', user);
router.use('/mentor', mentor);

// YOUR API ROUTES HERE
router.get('/mentors', (req, res) => {
    dbclient.connect(url, (err, client) => {
        if(err){
            console.log("Error: ", err);
        } else {
            const db = client.db(db_name);
            db.collection("mentors").find({}).toArray((err, docs)=>{
                if(err){
                    console.log("DB Error: ", err);
                } else {
                    res.json(docs);
                }
            });
        }
        client.close(); //end connection
    });
});

router.put('/mentors', (req, res) => {
    dbclient.connect(url, (err, client) => {
        if(err){
            console.log("Error: ", err);
            next();
        } else {
            const db = client.db(db_name)
        }           

    });
});

router.get('/mentors/:id',(req, res) => {
	//this is where to make the database mongo call
	var mentor = {
		name: 'Devany', 
		college: 'Georgia Institue of Technology',
		year: 'Third',
		bio: 'Hi! I am a third year Computer Science at Georgia Tech!'
	}
	return res.json({ mentor });
});

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