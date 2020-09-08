const mongoose = require("mongoose");

// create a schema
const riddleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: mongoose.Schema.Types.String,
  answer: mongoose.Schema.Types.String,
});

module.exports = mongoose.model("Riddle", riddleSchema);
