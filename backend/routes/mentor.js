//npm Packages
const express = require('express');;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

//Local imports
const Mentor = require('../models/mentor');

//GETs a specific mentor by their ID
router.get('/readMentor/:id', (req, res) => {
    Mentor.find({
        id: req.params.id
    }).then((mentor) => res.send(mentor))
      .catch((err) => res.send("" + err));
});

//GETs all mentors
router.get('/readMentors', (req, res) => {
    console.log("Reading all mentors");
    Mentor.find({})
        .exec().then((mentor) => res.send(mentor))
        .catch((err) => {
            res.send("" + err);
        });
});


//POSTs a new mentor
router.post('/createMentor', (req,res) => {
    Mentor.create(req.body, (err, mentor) => {
        if (err) {
            req.send("" + err);
        } else {
            console.log("Created Mentor");
            res.send(mentor);
        }
    });
});

router.put('/updateMentor/:id', (req, res) => {
    Mentor.findByIdAndUpdate(req.params.id, req,body, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json(response);
        }
    });
});

router.delete('/deleteMentor/:id', (req, res) => {
    Mentor.findByIdAndRemove(req,params.id, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json({message: "Mentor with id " + req.params.id + " removed"});
        };
    })
});

modules.exports = router;