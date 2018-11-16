const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    organization: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: "Organization"}, required: false
    },

    mentor: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: "Mentor"}, required: false
    }
});

module.exports = mongoose.model('User', UserSchema);