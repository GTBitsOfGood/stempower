const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MentorSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
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
    type: [{ bio: String, title: String }],
    required: false
  },
  profilePictureURL: {
    type: String,
    required: false
  },
  organization: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Mentor", MentorSchema);
