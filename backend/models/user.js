const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
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
    }
});

UserSchema.methods.verifyPassword = (password) => {
    return password == this.password
};

module.exports = mongoose.model('user', UserSchema);