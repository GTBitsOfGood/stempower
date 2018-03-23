//npm Packages
const express = require('express');;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

//Local imports
const Mentor = require('../models/mentor');

//GETs a specific mentor by their ID
router.get('/readMentor/:id', (req, res) => {
    User.find(id, function(err, mentor) {
        if (err || !mentor) return next(err);

        req.mentor = mentor;
        next();
    });
});

//POST that updates a mentor item
// router.post('/readMentor/:id', (req, res) => {
//     Mentor.findByIdAndUpdate({
//         id: req.params.id
//     }, {
//         login: false
//     }, function(err, docs) {
//         if (err) {
//             res.json(err);
//         } else {
//             console.log("successful");
//             res.json("logged out!")
//         }
//     })
// });

// createMentor()
// updateMentor()
// deleteMentor()

modules.exports = router;