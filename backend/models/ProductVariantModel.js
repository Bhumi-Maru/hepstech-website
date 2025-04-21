const mongoose = require("mongoose");

const ProductVariantSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true, // Indexing for better query performance
    },
    variantAttributes: [
      {
        name: { type: String }, // e.g., Color, Size
        value: { type: String }, // e.g., Red, M
        hex: { type: String },
      },
    ],
    mrpPrice: { type: Number, min: 0 },
    sellingPrice: { type: Number, min: 0 },
    sku: { type: String, trim: true, unique: false },
    quantity: { type: Number, default: 0, min: 0 },
    image: [{ type: String, trim: true }], /// URL or image path
  },
  { timestamps: true }
);

const ProductVariant = mongoose.model("ProductVariant", ProductVariantSchema);

module.exports = ProductVariant;
