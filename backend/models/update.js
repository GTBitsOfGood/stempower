const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UpdateSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  organization: {
  	type: String,
  	required: true
  }
});

module.exports = mongoose.model("Update", UpdateSchema);
