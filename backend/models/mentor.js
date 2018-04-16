const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MentorSchema = new Schema({
    // id: {
    //     type: int,
    //     required: true
    // },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    troopNumber: {
        type: String,
        required: true
    }

    /**
     * The following methods are stubbed, talk about how we'll implement
     * them later
     */
    // availability: {

    // },

    // profilePicture: {

    // }
});

module.exports = mongoose.model('mentor', MentorSchema);