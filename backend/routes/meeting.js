// npm Packages
const express = require('express');;
const bodyParser = require('body-parser');
const router = express.Router();

// Local imports
const Meeting = require('mongoose').model('Meeting');

router.get('/:meeting_id/bios/:bio_id', (req, res) => {
    Meeting.findById(req.params.meeting_id).then(function(meeting) { 
        if (meeting.bios == null) {
            meeting.bios = [];
        }
        var bios = meeting.bios;
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



router.get('/:meeting_id/date', (req, res) => {
    Meeting.findById({
        _id: req.params.meeting_id
    }).then((meeting) => res.send(meeting.date))
      .catch((err) => res.send("" + err));
});

router.delete('/:meeting_id/date', (req, res) => {
    Meeting.findById(req.params.meeting_id).then(function(meeting) { 
        meeting.date = null;
        meeting.save((e, meeting) => res.send(meeting.date))})
      .catch((err) => res.send("" + err));
});

// GETs a specific meeting by their ID
router.get('/:meeting_id', (req, res) => {
    Meeting.findById(req.params.meeting_id).then((meeting) => res.send(meeting))
      .catch((err) => res.send("" + err));
});

router.put('/:meeting_id', (req, res) => {
    Meeting.findByIdAndUpdate(req.params.meeting_id, req.body, {upsert: true, new: true},function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json(response);
        }
    });
});

router.delete('/:meeting_id', (req, res) => {
    Meeting.findByIdAndRemove(req.params.meeting_id, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json({message: "Meeting with id " + req.params.meeting_id + " removed"});
        };
    })
});

// GETs all meetings
router.get('/', (req, res) => {
    console.log("Reading all meetings");
    Meeting.find({})
        .exec().then((meeting) => res.send(meeting))
        .catch((err) => {
            res.send("" + err);
        });
});

// POSTs a new meeting
router.post('/', (req,res) => {
    console.log(req.body);
    Meeting.create(req.body, (err, meeting) => {
        if (err) {
            res.send("" + err);
        } else {
            console.log("Created Meeting");
            res.send(meeting);
        }
    });
});

module.exports = router;