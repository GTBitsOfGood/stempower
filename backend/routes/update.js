// npm Packages
const express = require('express');;
const bodyParser = require('body-parser');
const router = express.Router();

// Local imports
const Update = require('mongoose').model('Update');

router.get('/:update_id/organization', (req, res) => {
    Update.findById({
        _id: req.params.update_id
    }).then((update) => res.send(update.organization))
      .catch((err) => res.send("" + err));
});

router.delete('/:update_id/organization', (req, res) => {
    Update.findById(req.params.update_id).then(function(update) { 
        update.date = null;
        update.save((e, update) => res.send(update.organization))})
      .catch((err) => res.send("" + err));
});

// GETs a specific update by their ID
router.get('/:update_id', (req, res) => {
    Update.findById(req.params.update_id).then((update) => res.send(update))
      .catch((err) => res.send("" + err));
});

router.put('/:update_id', (req, res) => {
    Update.findByIdAndUpdate(req.params.update_id, req.body, {upsert: true, new: true},function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json(response);
        }
    });
});

router.delete('/:update_id', (req, res) => {
    Update.findByIdAndRemove(req.params.update_id, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json({message: "Update with id " + req.params.update_id + " removed"});
        };
    })
});

// GETs all updates
router.get('/', (req, res) => {
    console.log("Reading all updates");
    Update.find({})
        .exec().then((update) => res.send(update))
        .catch((err) => {
            res.send("" + err);
        });
});

// POSTs a new update
router.post('/', (req,res) => {
    console.log(req.body);
    Update.create(req.body, (err, update) => {
        if (err) {
            res.send("" + err);
        } else {
            console.log("Created Update");
            res.send(update);
        }
    });
});

module.exports = router;