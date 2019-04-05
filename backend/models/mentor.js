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
  }
});

<<<<<<< HEAD
module.exports = mongoose.model('Mentor', MentorSchema);
=======
module.exports = mongoose.model("Mentor", MentorSchema);
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
