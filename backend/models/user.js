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
    }
});

UserSchema.methods.verifyPassword = (password) => {
    return password == this.password
};

module.exports = mongoose.model('user', UserSchema);