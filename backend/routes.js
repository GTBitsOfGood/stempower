const express = require('express');
const router = express.Router();

// YOUR API ROUTES HERE

// SAMPLE ROUTE
router.use('/api/users', (req, res) => {
    res.json({ success: true });
});
router.get('/mentors/:id',(req, res) => {
	//this is where to make the database mongo call
	var mentor = {
		name: 'Devany', 
		college: 'Georgia Institue of Technology',
		year: 'Third',
		bio: 'Hi! I am a third year Computer Science at Georgia Tech!'
	}
	return res.json({ mentor });
});


module.exports = router;
