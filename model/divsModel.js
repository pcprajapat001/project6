const mongoose = require("mongoose");

const divsModel = mongoose.model("divs", {
  name: { type: String },
});

module.exports = divsModel;
