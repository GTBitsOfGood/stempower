// npm Packages
const express = require('express');;
const bodyParser = require('body-parser');
const router = express.Router();

// Local imports
const DocumentType = require('mongoose').model('DocumentType');

router.get('/', (req, res) => {
    DocumentType.find({})
        .exec().then((documentTypes) => res.send(documentTypes))
        .catch((err) => {
            res.send("" + err);
        });
});

router.post('/', (req,res) => {
    DocumentType.create(req.body, (err, documentTypes) => {
        if (err) {
            res.send("" + err);
        } else {
            res.send(documentTypes);
        }
    });
});

router.delete('/', (req,res) => {
    DocumentType.findOneAndDelete(req.body.documentType, function(err, response) {
        if (err) {
            res.json("" + err);
        } else {
            res.json({message: "Document Type" + response + " removed"});
        };
    })
});

module.exports = router;