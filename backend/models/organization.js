const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const Mentor = require('mongoose').model('Mentor');

let OrganizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    leaders: {
        type: [{leader: String}],
        required: true
    },
    address: {
        type: String,
        required: true
    },

    members: {
        type: [{member: String}],
        required: false
    },

    mentors: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "Mentor"}], required: false
    }
});

module.exports = mongoose.model('Organization', OrganizationSchema);