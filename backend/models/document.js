const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DocumentSchema = new Schema({
	path: {
		type: String,
		required: false
	}
});

module.exports = mongoose.model('Document', DocumentSchema);