const mongoose = require("mongoose");

const productGalleryImageSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    galleryImages: {
      type: [String], // Array of image paths
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const ProductGalleryImage = mongoose.model(
  "ProductGalleryImage",
  productGalleryImageSchema
);

module.exports = ProductGalleryImage;
