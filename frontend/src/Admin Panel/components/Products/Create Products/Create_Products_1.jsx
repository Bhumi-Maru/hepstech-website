import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useProductContext } from "../../../context/Product_Create_Context";

export default function Create_Products_1() {
  const { isActive, handleActive } = useAdminGlobalContext();
  const { productId } = useParams();
  console.log("pro", productId);
  return (
    <>
      {/* CREATE PRODUCTS SECTION 1 [HEADING] */}
      <div className="sm:flex sm:items-center sm:space-x-3">
        <nav aria-label="Back">
          <Link
            to="/products/all-products"
            title="Back to Products"
            className={`flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 ${
              isActive === "All Products" ? "active" : ""
            }`}
            onClick={() => handleActive("All Products")}
          >
            <svg
              className="flex-shrink-0 w-6 h-6 mr-1 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            <span className="block sm:hidden">Back</span>
          </Link>
        </nav>

        {/* <!-- PAGE TITLE --> */}
        <h1 className="mt-3 heading-1 sm:mt-0">
          {productId ? "Edit Product" : "Create Product"}
        </h1>
      </div>
    </>
  );
}
