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
    Mentor.findById(req.params.mentor_id).then(function(mentor) { 
        if (mentor.bios == null) {
            mentor.bios = [];
        }
        var bios = mentor.bios;
        var requestedBio = null;
        for (var i = 0; i < bios.length; i++) {
            var b = bios[i];
            if (b._id == req.params.bio_id) {
                requestedBio = b;
                break;
            }
        }
        res.send(requestedBio) })
      .catch((err) => res.send("" + err));
});

router.put('/:mentor_id/bios/:bio_id', (req, res) => {
    Mentor.findById(req.params.mentor_id).then(function(mentor) { 
        if (mentor.bios == null) {
            mentor.bios = [];
        }
        var bios = mentor.bios;
        var b = null;
        for (var i = 0; i < bios.length; i++) {
            b = bios[i];
            if (b._id == req.params.bio_id) {
                b.bio = req.body.bio;
                break;
            }
        }
        mentor.save((e, mentor) => res.send(b.bio))})
      .catch((err) => res.send("" + err));
});

router.delete('/:mentor_id/bios/:bio_id', (req, res) => {
    Mentor.findById(req.params.mentor_id).then(function(mentor) { 
        if (mentor.bios == null) {
            mentor.bios = [];
        }
        var bios = mentor.bios;
        for (var i = 0; i < bios.length; i++) {
            var b = bios[i];
            if (b._id == req.params.bio_id) {
                mentor.bios.splice(i, 1);
                break;
            }
        }
        mentor.save((e, mentor) => res.send(mentor.bios))})
      .catch((err) => res.send("" + err));
});

router.get('/:mentor_id/bios', (req, res) => {
    Mentor.findById({
        _id: req.params.mentor_id
    }).then((mentor) => res.send(mentor.bios))
      .catch((err) => res.send("" + err));
});

router.post('/:mentor_id/bios', (req, res) => {
    Mentor.findById({
        _id: req.params.mentor_id
    }).then(function(mentor) { 
        if (mentor.bios == null) {
            mentor.bios = [];
        }
        var newBio = {"bio": req.body.bio, "id": mentor.bios.length};
        mentor.bios.push(newBio);
        mentor.save((e, mentor) => res.send(mentor));
    })
      .catch((err) => res.send("" + err));
});

router.get('/:mentor_id/bios/picture', (req, res) => {
    Mentor.find({
        id: req.params.mentor_id
    }).then((mentor) => res.send(mentor))
      .catch((err) => res.send("" + err));
});

// GETs a specific mentor by their ID
router.get('/:mentor_id', (req, res) => {
    Mentor.findById(req.params.mentor_id).then((mentor) => res.send(mentor))
      .catch((err) => res.send("" + err));
});

router.put('/:mentor_id', (req, res) => {
    Mentor.findByIdAndUpdate(req.params.mentor_id, req.body, {upsert: true, new: true},function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json(response);
        }
    });
});

router.delete('/:mentor_id', (req, res) => {
    Mentor.findByIdAndRemove(req.params.mentor_id, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json({message: "Mentor with id " + req.params.mentor_id + " removed"});
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