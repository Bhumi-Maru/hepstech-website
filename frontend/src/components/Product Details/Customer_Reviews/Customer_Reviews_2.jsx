import React, { useState } from "react";

export default function Customer_Reviews_2() {
  const [rating, setRating] = useState(0); // Store selected rating
  const [hover, setHover] = useState(0); // Store hover effect
  return (
    <>
      {/* CUSTOMER REVIEWS 2 */}
      <div className="lg:col-span-3">
        <h3 className="text-xl font-bold">Review this product</h3>
        <p>Share your thoughts with other customers</p>

        <form action="#" method="POST" className="mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            {/* Add a Headline */}
            <div>
              <label for=""> Add a Headline </label>
              <div className="mt-1">
                <input type="text" name="" id="" placeholder="" className="" />
              </div>
            </div>
            {/* Overall Rating with Stars */}
            <div>
              <label htmlFor="rating"> Overall Rating </label>
              <div className="flex space-x-2" style={{ paddingTop: "3px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(rating)}
                    className="w-8 h-8"
                  >
                    <svg
                      version="1.0"
                      className="jq-star-svg"
                      shapeRendering="geometricPrecision"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40px"
                      height="40px"
                      viewBox="0 146.8 550 500.2"
                      style={{ strokeWidth: "4px", cursor: "pointer" }}
                      xmlSpace="preserve"
                    >
                      <path
                        data-side="center"
                        d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7c-5.5-11.2-16.8-18.2-29.3-18.2
              c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370l102,99.4l-24,140.3
              c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2c4.8,2.6,10,3.8,15.2,3.8
              c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4C521.6,361.3,524.8,348.3,520.9,336.5z"
                        style={{
                          stroke: "black",
                          fill:
                            star <= (hover || rating) ? "#F59E0B" : "#D1D5DB",
                        }}
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            {/* Add a Review */}
            <div className="sm:col-span-2">
              <label for=""> Add a Review </label>
              <div className="mt-1">
                <textarea
                  name=""
                  id=""
                  placeholder=""
                  rows="3"
                  className="resize-y"
                ></textarea>
              </div>
            </div>
            {/* Add Photos */}
            <div className="hidden sm:col-span-2">
              <label for="">
                Add Photos
                <span className="block text-xs text-gray-600">
                  Shoppers find images more helpful than text alone.
                </span>
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="files[]"
                  id="reviewImages"
                  multiple="multiple"
                />
              </div>
            </div>
            {/* Submit Button */}
            <div className="sm:col-span-2 sm:text-right">
              <button
                type="submit"
                className="w-full btn btn-primary sm:w-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
