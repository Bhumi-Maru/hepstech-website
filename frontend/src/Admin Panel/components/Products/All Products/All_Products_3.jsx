import React from "react";

export default function All_Products_3({ setSearchQuery }) {
  return (
    <>
      {/* ALL PRODUCTS SECTION 3 [SEARCH , SORTING ON PRODUCTS] */}
      <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:space-x-4">
        <div className="flex-1 max-w-sm">
          <label for="searchProducts" className="sr-only">
            Search
          </label>
          <div className="relative rounded-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
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
                />
              </svg>
            </div>
            <input
              type="text"
              name="searchProducts"
              id="searchProducts"
              className="!pl-10"
              placeholder="Search by product name..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-0">
          <label for="mrpPrice" className="sr-only">
            MRP Price
          </label>
          <div className="flex items-center py-1 pl-3 bg-white border border-gray-300 rounded-md focus-within:border-skin-primary focus-within:ring-1 focus-within:ring-skin-primary">
            <div className="flex-none pointer-events-none">
              <span className="text-gray-500 sm:text-sm">Sort by:</span>
            </div>
            <select
              name=""
              id=""
              className="py-0 pl-2 border-none rounded-none pr-auto focus:border-none focus:ring-0 focus:outline-none"
            >
              <option value="">Product Title A-Z</option>
              <option value="">Product title Z–A</option>
              <option value="">Created (oldest first)</option>
              <option value="">Created (newest first)</option>
              <option value="">Updated (oldest first)</option>
              <option value="">Updated (newest first)</option>
              <option value="">Low inventory</option>
              <option value="">High inventory</option>
              <option value="">Product type A–Z</option>
              <option value="">Product type Z–A</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
