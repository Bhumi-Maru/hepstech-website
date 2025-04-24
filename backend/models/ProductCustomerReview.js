const mongoose = require("mongoose");

const customerReviewSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  headline: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  review: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  reviewerName: {
    type: String,
    default: "Anonymous",
  },
  reviewerPhotos: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CustomerReview = new mongoose.model("Review", customerReviewSchema);

module.exports = CustomerReview;
