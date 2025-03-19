const mongoose = require("mongoose");

const productGalleryImageSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    galleryImages: {
      type: [String],
      required: true,
      default: [],
      validate: {
        validator: function (images) {
          return images.every((url) =>
            /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))|^(https?:\/\/[\w\d-]+(\.[\w\d-]+)+.*)$/.test(
              url
            )
          );
        },
        message: "One or more image URLs are invalid.",
      },
    },
  },
  { timestamps: true }
);

const ProductGalleryImage = mongoose.model(
  "ProductGalleryImage",
  productGalleryImageSchema
);

module.exports = ProductGalleryImage;
