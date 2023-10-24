const mongoose = require("mongoose");

const fullnamesModel = mongoose.model("fullnames", {
  fname: { type: String },
  lname: { type: String },
});

module.exports = fullnamesModel;
