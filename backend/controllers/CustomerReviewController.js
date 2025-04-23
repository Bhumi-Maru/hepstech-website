const mongoose = require("mongoose");
const CustomerReview = require("../models/ProductCustomerReview");

// Create a new review
const createReview = async (req, res) => {
  try {
    const { headline, review, rating, reviewerName } = req.body;
    const { productId } = req.params;

    // Validate rating is between 1 and 5
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    const newReview = new CustomerReview({
      product: productId,
      headline,
      review,
      rating,
      reviewerName,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to add review", details: error.message });
  }
};

// Get all reviews for all products (admin view)
const getAllReviews = async (req, res) => {
  try {
    const reviews = await CustomerReview.find({}).populate({
      path: "product",
      select: "productTitle",
      populate: [
        {
          path: "productMainCategory",
          select: "main_category_title",
        },
        {
          path: "productSubCategory",
          select: "sub_category_title",
        },
      ],
    });
    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch reviews", details: error.message });
  }
};

// Get reviews for a specific product
const getReviewsByProductId = async (req, res) => {
  try {
    const { productId } = req.params;

    // Validate product ID format
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }

    const reviews = await CustomerReview.find({ product: productId }).sort({
      createdAt: -1,
    }); // Sort by newest first

    if (!reviews || reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this product" });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch reviews", details: error.message });
  }
};

// Get average rating for a products
const getAverageRating = async (req, res) => {
  try {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }

    const result = await CustomerReview.aggregate([
      { $match: { product: mongoose.Types.ObjectId(productId) } },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
          reviewCount: { $sum: 1 },
        },
      },
    ]);

    if (result.length === 0) {
      return res.status(404).json({
        averageRating: 0,
        reviewCount: 0,
        message: "No reviews found for this product",
      });
    }

    res.status(200).json({
      averageRating: result[0].averageRating.toFixed(1),
      reviewCount: result[0].reviewCount,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to calculate average rating",
      details: error.message,
    });
  }
};

// Delete a review (admin only)
const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      return res.status(400).json({ error: "Invalid review ID format" });
    }

    const deletedReview = await CustomerReview.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete review", details: error.message });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewsByProductId,
  getAverageRating,
  deleteReview,
};
