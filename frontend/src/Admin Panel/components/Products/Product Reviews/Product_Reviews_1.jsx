import React from "react";

export default function Product_Reviews_1() {
  return (
    <>
      {/* PRODUCTS REVIEWS [SEARCH] */}
      <div className="max-w-sm mt-4">
        <label for="searchReviews" className="sr-only">
          Search
        </label>
        <div className="relative rounded-md">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="searchReviews"
            id="searchReviews"
            className="!pl-10"
            placeholder="Search by product name or customer name..."
          />
        </div>
      </div>
    </>
  );
}
