const mongoose = require("mongoose");

const productDescriptionSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
      required: true,
    },
    descriptionSections: [
      {
        sectionTitle: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
      },
    ],
  },
  { timestamps: true }
);

const ProductDescription = mongoose.model(
  "ProductDescription",
  productDescriptionSchema
);

module.exports = ProductDescription;
