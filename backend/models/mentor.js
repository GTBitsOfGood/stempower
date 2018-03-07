const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MentorSchema = new Schema({
    name: {
        type = String,
        required = true
    },

    email: {
        type = String,
        required: true
    },

    phoneNumber: {
        type = String,
    },

    troopNumber: {
        type = int
    },

    /**
     * The following methods are stubbed, talk about how we'll implement
     * them later
     */
    availability: {
        
    },

    profilePicture: {

    }
});

modal.exports = Mongoose.model('mentor', MentorSchema);