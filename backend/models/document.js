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
	},
	fileType: {
		type: String,
		required: false
	},

	orgId: {
		type: String,
		required: false
	},

	member: {
		type: String,
		rquired: false
	},

	mentorId: {
		type: String,
		required: false
	}

});

module.exports = mongoose.model('Document', DocumentSchema);