// users models for database
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    account_type: {
      type: String,
      required: true,
    },
    name_of_business: {
      type: String,
      default: "",
    },
    gstn: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
