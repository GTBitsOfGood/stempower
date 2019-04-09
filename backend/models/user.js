const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const Mentor = require('mongoose').model('Mentor');
const Organization = require('mongoose').model('Organization');

let UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ["mentor", "organization", "parent", "admin"],
    required: true
  },
  organization: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
    required: false
  },
  mentor: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
    required: false
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
