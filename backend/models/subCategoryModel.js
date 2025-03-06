const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import UUID

const subCategorySchema = new mongoose.Schema(
  {
    sub_category_id: {
      type: String,
      default: uuidv4, // Auto-generate UUID
      unique: true,
    },
    sub_category_title: {
      type: String,
      required: true,
    },
    main_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainCategory", // Correct reference to the MainCategory model
      required: true,
    },
    sub_Image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File", // Correct reference to the File model
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

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
