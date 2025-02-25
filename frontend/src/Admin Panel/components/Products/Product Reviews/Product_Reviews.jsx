import React from "react";
import Product_Reviews_1 from "./Product_Reviews_1";
import Product_Reviews_2 from "./Product_Reviews_2";

export default function Product_Reviews() {
  return (
    <>
      {/* PRODUCT REVIEWS */}
      <div className="container">
        {/* PAGE TITLE */}
        <h1 className="heading-1">Product Reviews</h1>
        {/* PRODUCTS REVIEWS [SEARCH] */}
        <Product_Reviews_1 />
        {/* PRODUCTS REVIEWS [Product Table] */}
        <Product_Reviews_2 />
        <hr className="mt-6 mb-5 border-gray-200" />
        <button type="button" className="btn btn-error">
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
          Bulk Delete
        </button>
      </div>
    </>
  );
}
