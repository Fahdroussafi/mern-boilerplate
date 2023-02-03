const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const adminSchema = new mongoose.Schema(
  {
    // write your schema here
  },
  { timestamps: true }
);

adminSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Admin", adminSchema);
