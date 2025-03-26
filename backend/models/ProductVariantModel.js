const mongoose = require("mongoose");

const ProductVariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    variantAttributes: [
      {
        name: { type: String, required: true }, // e.g., Color, Size
        value: { type: String, required: true }, // e.g., Red, M
      },
    ],
    mrpPrice: { type: Number, required: true, min: 0 },
    sellingPrice: { type: Number, required: true, min: 0 },
    sku: { type: String, trim: true, unique: false },
    quantity: { type: Number, default: 0, min: 0 },
    image: { type: String, trim: true }, // URL or image path
  },
  { timestamps: true }
);

const ProductVariant = mongoose.model("ProductVariant", ProductVariantSchema);

module.exports = ProductVariant;
