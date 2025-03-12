const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import UUID

// SubCategory schema
const subCategorySchema = new mongoose.Schema(
  {
    sub_category_id: {
      type: String,
      default: uuidv4, // Auto-generate UUID for subcategory
      unique: false,
    },
    sub_category_title: {
      type: String,
      required: true,
    },
    main_category_id: {
      type: mongoose.Schema.Types.ObjectId, // Use ObjectId if you are working with ObjectIds
      ref: "MainCategory", // Reference to the MainCategory model
      required: true, // Ensure the main category is required
    },
    sub_image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
      required: true,
    },
    sub_category_status: {
      type: String,
      enum: ["published", "draft"],
      required: true,
    },
  },
  { timestamps: true }
);

// Create the Mongoose model
const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
