const express = require('express');
const bodyParser = require('body-parser');
const assert = require('assert');
const dbclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/stempower';
const fileUpload = require('express-fileupload');

const router = express.Router();
router.use(bodyParser.json());
router.use(fileUpload());

const files = require('./routes/files');
router.use('/files', files);


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

module.exports = router;



