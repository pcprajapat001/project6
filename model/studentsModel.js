const mongoose = require("mongoose");

const studentsModel = mongoose.model("students", {
  name: { type: String },
  class: { type: String },
  div: { type: String },
  house: { type: String },
});

module.exports = studentsModel;
