const mongoose = require("mongoose");

const gendersModel = mongoose.model("genders", {
  name: {
    type: String,
  },
});

module.exports = gendersModel;
