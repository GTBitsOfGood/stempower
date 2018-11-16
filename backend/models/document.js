const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DocumentSchema = new Schema({
	fileName: {
		type: String,
		required: false
	},

	fileLabel: {
		type: String,
		required: false
	}
});

module.exports = mongoose.model('Document', DocumentSchema);