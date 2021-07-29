// post models for database
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    msp: {
      type: Number,
      required: true,
    },
    current_bid: {
      type: Number,
      required: true,
    },
    no_of_bids: {
      type: Number,
      required: true,
    },
    bidding_end_date: {
      type: Date,
      required: true,
    },
    cookies_type: {
      type: String,
      required: true,
    },
    egg: {
      type: Boolean,
      required: true,
    },
    baked_time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
