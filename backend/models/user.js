const mongoose = require("mongoose");
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
  },

  userType: {
    type: String,
    //TODO: might not want to have admin here
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
