const mongoose = require("mongoose");

const CreateProductSchema = new mongoose.Schema(
  {
    productTitle: { type: String, required: true, trim: true },
    productMainCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainCategory",
      required: true,
    },
    productSubCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
    productMainImage: { type: String, required: true, trim: true },
    productPurchaseMinQuantity: { type: Number, required: true },
    productPurchaseMaxQuantity: { type: Number, required: true },
    productType: {
      type: String,
      enum: ["simple", "variant"],
      default: "simple",
    },
    // Pricing - Only for "simple" products
    pricing: {
      mrpPrice: {
        type: Number,
        required: function () {
          return this.productType === "simple"; // ✅ Required only for "simple" products
        },
        min: 0,
      },
      sellingPrice: {
        type: Number,
        required: function () {
          return this.productType === "simple"; // ✅ Required only for "simple" products
        },
        min: 0,
      },
      sku: { type: String, unique: false, trim: true },
      quantity: { type: Number, default: 0, min: 0 },
    },
    // Variants - Only for "variant" products
    enableColorOptions: { type: Boolean, default: false },
    variantOptions: [
      {
        name: { type: String, required: true }, // e.g., Color, Size , weight
        values: [{ type: String, required: true }], // e.g., ["Red", "Blue" , "1kg"]
      },
    ],
    productVariants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductVariant",
      },
    ], // variant [multiple]
    tax: {
      type: {
        taxType: {
          type: String,
          enum: ["flat", "percentage"],
          required: true,
        },
        value: { type: Number, required: true, min: 0 },
      },
      required: true,
    },
    productStatus: {
      type: String,
      enum: ["Active", "Draft"],
      default: "Active",
    },
    productStockVisibility: {
      type: String,
      enum: ["show stock quantity", "show stock with text only", "hide stock"],
      required: true,
    },
    productLabel: {
      type: String,
      enum: ["none", "new", "offer", "flash_sale"],
      default: "none",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", CreateProductSchema);

module.exports = Product;
