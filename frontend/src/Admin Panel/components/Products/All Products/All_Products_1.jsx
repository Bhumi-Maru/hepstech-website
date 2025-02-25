import React from "react";
import { Link } from "react-router-dom";

export default function All_Products_1() {
  return (
    <>
      {/* ALL PRODUCT SECTION 1 [HEADING] */}
      <div className="sm:flex sm:items-baseline sm:justify-between">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Products</h1>

        <div className="hidden mt-4 sm:mt-0 sm:block">
          <Link
            to="/products/create-product"
            title="Create Product"
            className="btn btn-primary"
            role="button"
          >
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Create Product
          </Link>
        </div>
      </div>
    </>
  );
}
