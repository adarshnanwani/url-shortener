const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shorturlSchema = new Schema(
  {
    original_url: {
      type: String,
      required: true
    },
    short_url: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const ShortUrl = mongoose.model("ShortUrl", shorturlSchema);

module.exports = ShortUrl;
