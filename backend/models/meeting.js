const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MeetingSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Meeting", MeetingSchema);
