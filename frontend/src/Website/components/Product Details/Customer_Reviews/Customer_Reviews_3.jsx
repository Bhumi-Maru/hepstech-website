import React, { useEffect, useState } from "react";
import { useProductDetails } from "../../../context/ProductDetails_Context";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Customer_Reviews_3() {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProductReviewById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/customer/products/${productId}/reviews`
        );
        setReviews(response.data); // assuming response.data is the array of reviews
      } catch (error) {
        console.error("Failed to fetch product reviews:", error);
      }
    };

    fetchProductReviewById();
  }, [productId, reviews]);
  return (
    <>
      {/* Customer_Reviews_3 */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <h3 className="text-xl font-bold">{reviews.length} comments</h3>

        <div className="flex items-center max-w-xs mt-2 space-x-2 sm:mt-0">
          <label for="" className="flex-none">
            {" "}
            Sort by:{" "}
          </label>
          <select name="" id="">
            <option value="">Most Recent</option>
          </select>
        </div>
      </div>
    </>
  );
}
