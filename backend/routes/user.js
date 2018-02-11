var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* Get the list of all users */
router.get('/', (req, res, next) => {
    User.find((err, products) => {
        if (err) return next(err);
        res.json(products);
    });
});

/* Get a single user by their ID */
router.get('/:id', (req, res, next) => {
    User.findById(req.params.id, (err, post) => {
        if(err) return next(err);
        res.json(post);
    });
});

/* Posts a new user */
router.post('/', (req, res, next) => {
    User.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* Update an existing user */
router.put('/:id', (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, post) =>{
        if (err) return next(err);
        res.json(post);
    });
});

/* Delete a user */
router.delete('/:id', (req, res, next) => {
    User.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;