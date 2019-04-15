const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const documentTypes = require('mongoose').model('DocumentType')

let DocumentSchema = new Schema({
	fileName: {
		type: String,
		required: true
	},
	owner: {
		type: String,
		required: true
	},
	documentType: {
		type: String,
		required: true
	}

});

module.exports = mongoose.model('Document', DocumentSchema);