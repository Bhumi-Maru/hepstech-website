const mongoose = require("mongoose");

const seoTagSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 70, // Enforcing the 70-character limit
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 320, // Enforcing the 320-character limit
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (value) {
          return /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/[\w\d-./?%&=]*)?$/.test(
            value
          );
        },
        message: "Invalid URL format",
      },
    },
  },
  { timestamps: true }
);

const SeoTag = mongoose.model("SeoTag", seoTagSchema);

module.exports = SeoTag;
