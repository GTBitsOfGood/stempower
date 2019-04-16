const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DocumentTypeSchema = new Schema({
	type: {
		type: String,
		required: true
	},
	ownerType: {
		type: String,
		required: true
	}

});

module.exports = mongoose.model('DocumentType', DocumentTypeSchema);