const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DocumentSchema = new Schema({
	documentID: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: false
	}
});

module.exports = mongoose.model('Document', DocumentSchema);