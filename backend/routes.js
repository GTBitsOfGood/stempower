const express = require('express');
const router = express.Router();
const dbclient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017";
let db_name = "stempower"

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

router.use('/memberpage',(req, res) => {
	res.json({success: true});
});

module.exports = router;
