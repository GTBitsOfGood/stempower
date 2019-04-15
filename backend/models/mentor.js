const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MentorSchema = new Schema({
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
    required: false
  },
  university: {
    type: String,
    required: false
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
    type: Schema.ObjectId,
    ref: 'Organization',
    required: false
  },
});

module.exports = mongoose.model('Mentor', MentorSchema);
