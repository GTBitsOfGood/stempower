const mongoose = require('mongoose');
let Schema = mongoose.Schema;

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
		enum: ["org_feedback", "member_feedback", "member_waiver", "org_app"],
		required: true
	}

});

module.exports = mongoose.model('Document', DocumentSchema);