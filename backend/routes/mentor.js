// npm Packages
const express = require('express');;
const bodyParser = require('body-parser');
const router = express.Router();

// Local imports
const Mentor = require('mongoose').model('Mentor');

router.get('/test', (req, res) => {
    res.send('test successful');
});

router.get('/:mentor_id/bios/:bio_id', (req, res) => {
    Mentor.find({
        id: req.params.id
    }).then((mentor) => res.send(mentor))
      .catch((err) => res.send("" + err));
});

router.get('/:mentor_id/bios', (req, res) => {
    Mentor.find({
        id: req.params.id
    }).then((mentor) => res.send(mentor))
      .catch((err) => res.send("" + err));
});

router.get('/:mentor_id/bios/picture', (req, res) => {
    Mentor.find({
        id: req.params.id
    }).then((mentor) => res.send(mentor))
      .catch((err) => res.send("" + err));
});

// GETs a specific mentor by their ID
router.get('/:mentor_id', (req, res) => {
    Mentor.find({
        id: req.params.id
    }).then((mentor) => res.send(mentor))
      .catch((err) => res.send("" + err));
});

router.put('/:mentor_id', (req, res) => {
    Mentor.findByIdAndUpdate(req.params.id, req,body, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json(response);
        }
    });
});

router.delete('/:mentor_id', (req, res) => {
    Mentor.findByIdAndRemove(req,params.id, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json({message: "Mentor with id " + req.params.id + " removed"});
        };
    })
});

// GETs all mentors
router.get('/', (req, res) => {
    console.log("Reading all mentors");
    Mentor.find({})
        .exec().then((mentor) => res.send(mentor))
        .catch((err) => {
            res.send("" + err);
        });
});

// POSTs a new mentor
router.post('/', (req,res) => {
    console.log(req.body);
    Mentor.create(req.body, (err, mentor) => {
        if (err) {
            res.send("" + err);
        } else {
            console.log("Created Mentor");
            res.send(mentor);
        }
    });
});

module.exports = router;