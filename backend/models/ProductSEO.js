const mongoose = require("mongoose");

const seoTagSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 70,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 320,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// Auto-generate SEO URL before saving
seoTagSchema.pre("save", function (next) {
  if (!this.url || this.url === "hello") {
    this.url = `https://myshopify.com/products/${this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`; // Convert title into URL-friendly slug
  }
  next();
});

const SeoTag = mongoose.model("SeoTag", seoTagSchema);

module.exports = SeoTag;
