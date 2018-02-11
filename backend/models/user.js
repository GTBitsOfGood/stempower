const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        index: true,
        required
    },
    password: {
        type: String,
        index: true,
        required: true
    }
});
