const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import UUID

const mainCategorySchema = new mongoose.Schema(
  {
    main_category_id: {
      type: String,
      default: uuidv4, // Auto-generate UUID
      unique: false, // make it true
    },
    main_category_title: { type: String, required: true },

    // Reference to the File model for main image and banner image
    main_image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File", // Reference to File model
      required: true,
    },

    main_category_status: {
      type: String,
      enum: ["published", "draft"],
      required: true,
    },

    add_banner_image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File", // Reference to File model
    },

    add_banner_image_status: {
      type: String,
      enum: ["active", "deactive"],
    },
  },
  { timestamps: true }
);

const MainCategory = mongoose.model("MainCategory", mainCategorySchema);

module.exports = MainCategory;
