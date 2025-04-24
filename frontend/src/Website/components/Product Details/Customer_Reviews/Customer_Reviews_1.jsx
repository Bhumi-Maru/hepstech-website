import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Customer_Reviews_1() {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingDistribution, setRatingDistribution] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/customer/products/${productId}/reviews`
        );

        setReviews(response.data);

        // Calculate average rating
        const totalRatings = response.data.reduce(
          (sum, review) => {
            console.log("sum", sum);
            console.log("review", review);
            return sum + review.rating;
          },
          0 // Added initial value for reduce
        );

        const avg =
          response.data.length > 0 ? totalRatings / response.data.length : 0;

        setAverageRating(avg.toFixed(1));

        // Calculate rating distribution
        const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        response.data.forEach((review) => {
          distribution[review.rating]++;
        });
        setRatingDistribution(distribution);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [reviews]);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  const getPercentage = (count) => {
    const total = reviews.length;
    return total > 0 ? Math.round((count / total) * 100) : 0;
  };

  return (
    <div className="lg:col-span-2">
      <h3 className="text-xl font-bold">Customer Reviews</h3>

      <div className="flex items-center mt-4">
        <p className="text-5xl font-bold">{averageRating}</p>
        <div className="ml-4">
          <p>Overall rating</p>
          <p className="text-sm text-gray-600">
            Based on {reviews.length} reviews
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center">
            <div className="flex items-center">{renderStars(rating)}</div>
            <div className="relative flex-1 ml-5">
              <div className="flex h-1.5 overflow-hidden text-xs bg-gray-200 rounded-full w-full">
                <div
                  className="flex flex-col justify-center w-full text-center text-white bg-yellow-500 shadow-none whitespace-nowrap"
                  style={{
                    width: `${getPercentage(ratingDistribution[rating])}%`,
                  }}
                ></div>
              </div>
            </div>
            <p className="ml-3 text-sm text-gray-600">
              {ratingDistribution[rating]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
