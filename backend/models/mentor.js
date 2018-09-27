const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MentorSchema = new Schema({
    // id: {
    //  type: String,
    //  required: true
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

    university: {
        type: String,
        required: true
    },

    major: {
        type: String,
        required: false
    },

    year: {
        type: Number,
        required: false
    },

    bios: {
        type: [String],
        required: false
    },

    profilePicture: {
        type: Buffer,
        required: false
    },

    organization: {
        type: String,
        required: true
    }



    // troopNumber: {
    //     type: String,
    //     required: true
    // }

    /**
     * The following methods are stubbed, talk about how we'll implement
     * them later
     */
    // availability: {

    // },

    // profilePicture: {

    // }
});

module.exports = mongoose.model('Mentor', MentorSchema);