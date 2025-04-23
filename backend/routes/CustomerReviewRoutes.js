const express = require("express");
const {
  createReview,
  getAllReviews,
  getReviewsByProductId,
  getAverageRating,
  deleteReview,
} = require("../controllers/CustomerReviewController");

const customerReviewRouter = express.Router();

customerReviewRouter.post("/products/:productId/reviews", createReview);
customerReviewRouter.get("/products/:productId/reviews", getReviewsByProductId);
customerReviewRouter.get(
  "/products/:productId/reviews/average",
  getAverageRating
);
customerReviewRouter.get("/reviews", getAllReviews);
customerReviewRouter.delete("/reviews/:reviewId", deleteReview);

module.exports = customerReviewRouter;
