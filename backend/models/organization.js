const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let OrganizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    leaders: {
        type: [String],
        required: false
    },
    address: {
        type: String,
        required: true
    },
    members: {
        type: [String],
        required: false
    },
    mentors: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "Mentor"}], required: false
    }
});

module.exports = mongoose.model('Organization', OrganizationSchema);