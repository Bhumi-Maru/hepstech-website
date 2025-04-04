const mongoose = require("mongoose");

const storeSettingPageSchema = new mongoose.Schema(
  {
    pageTitle: { type: String, required: false },
    pages_add_banner_image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
      required: false,
    },
    pages_add_banner_image_status: {
      type: String,
      enum: ["active", "deactive"],
      required: false,
    },
    pageContent: { type: String, required: false },
    page_status: {
      type: String,
      enum: ["Published", "Unpublished"],
      required: false,
    },
    privacy_policy: { type: String, required: false },
    terms_conditions: { type: String, required: false },
  },
  { timestamps: true }
);

const StoreSettingPages = mongoose.model("Pages", storeSettingPageSchema);

module.exports = StoreSettingPages;
