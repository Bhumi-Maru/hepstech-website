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
    pricing: {
      mrpPrice: { type: Number, required: true, min: 0 },
      sellingPrice: { type: Number, required: true, min: 0 },
      sku: { type: String, unique: true, trim: true },
      quantity: { type: Number, default: 0, min: 0 },
    },
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
      enum: ["none", "new", "offer", "flash sale"],
      default: "none",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", CreateProductSchema);

module.exports = Product;
