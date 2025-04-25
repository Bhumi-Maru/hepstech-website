import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Customer_Reviews_4() {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/customer/products/${productId}/reviews`
        );
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId, reviews]);

  if (loading) return <div>Loading reviews...</div>;
  if (reviews.length === 0) return <div>No reviews yet for this product.</div>;
  return (
    <>
      {/* CUSTOMER REVIEWS 4 */}
      <div className="flow-root mt-6">
        <div className="-my-6 divide-y divide-gray-200">
          {reviews.map((review) => {
            return (
              <>
                <div key={review._id} className="py-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-4">
                    <div>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 overflow-hidden bg-gray-300 rounded-full">
                          <img
                            className="object-cover w-full h-full"
                            src=""
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="ml-5">
                          <p className="font-semibold truncate">
                            {review.reviewerName}
                          </p>
                          <div className="flex items-center mt-1">
                            {[
                              ...Array(5).map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-6 h-6 text-yellow-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              )),
                            ]}
                          </div>
                        </div>
                      </div>
                      <p className="mt-1 text-gray-600">
                        {new Date(review.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>

                    <div className="lg:col-span-3">
                      <p className="text-lg font-semibold">{review.headline}</p>
                      <p className="mt-1 text-gray-700">{review.review}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
