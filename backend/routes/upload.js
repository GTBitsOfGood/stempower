// npm Packages
const express = require('express');;
const bodyParser = require('body-parser');
const router = express.Router();

// Local imports
const Mentor = require('mongoose').model('Mentor');

router.put('/mentors/:mentor_id/picture', (req, res) => {
    Mentor.findByIdAndUpdate(req.params.mentor_id, req.body, {upsert: true, new: true}, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json(response);
        }
    });
});

module.exports = router;