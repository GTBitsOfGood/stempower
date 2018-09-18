const express = require('express');
const router = express.Router();

// YOUR API ROUTES HERE
router.get('/test', (req, res) => {
	res.render('test', { output: <h1> "hello </h1>" })
});

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

module.exports = router;
