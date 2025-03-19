const mongoose = require("mongoose");

const CreateProductSchema = new mongoose.Schema(
  {
    productTitle: { type: String, required: true, trim: true },
    productMainCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainCategory", // Referencing Category model
      required: true,
    },
    productSubCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory", // Referencing SubCategory model
      required: true,
    },
    productMainImage: { type: String, required: true, trim: true },
    pricing: {
      mrpPrice: { type: Number, required: true, min: 0 },
      sellingPrice: { type: Number, required: true, min: 0 },
      sku: { type: String, unique: true, trim: true },
      quantity: { type: Number, default: 0, min: 0 },
    },
    tax: { type: Number, default: 0, min: 0 }, // Tax percentage (0 = No tax)
    productStatus: {
      type: String,
      enum: ["Active", "Inactive"],
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
