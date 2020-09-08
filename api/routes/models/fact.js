const mongoose = require("mongoose");

// create a schema

const factSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: mongoose.Schema.Types.String,
  author: mongoose.Schema.Types.String,
});

module.exports = mongoose.model("Fact", factSchema);
