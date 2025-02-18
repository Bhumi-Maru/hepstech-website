import React from "react";
import { Link } from "react-router-dom";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Dashboard_1() {
  const { isActive, handleActive } = useAdminGlobalContext();
  return (
    <>
      {/* START DASHBOARD SUB SECTION 1 */}
      <div>
        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 p-3 rounded-md bg-skin-primary">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 xl:ml-6">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Total Customers
                </p>
                <p className="text-2xl mt-0.5 font-semibold text-gray-900">
                  75
                </p>
              </div>
            </div>
            <div className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <div className="absolute inset-x-0 bottom-0 px-4 py-3.5 bg-white border-t border-gray-200 sm:px-6">
                <Link
                  to="/customers"
                  title=""
                  className="flex items-center justify-between text-sm font-medium text-gray-600 transition-all duration-200 hover:text-skin-primary"
                >
                  View Customers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6">
            <div className="flex item-center">
              <div className="flex-shrink-0 w-12 h-12 p-3 rounded-md bg-skin-primary">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div className="ml-5 xl:ml-6">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Total Orders
                </p>
                <p className="text-2xl mt-0.5 font-semibold text-gray-900">
                  116
                </p>
              </div>
            </div>
            <div className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <div className="absolute inset-x-0 bottom-0 px-4 py-3.5 bg-white border-t border-gray-200 sm:px-6">
                <Link
                  to="/orders"
                  title="orders"
                  className="flex items-center justify-between text-sm font-medium text-gray-600 transition-all duration-200 hover:text-skin-primary"
                >
                  View Orders
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6">
            <div className="flex item-center">
              <div className="flex-shrink-0 w-12 h-12 p-3 rounded-md bg-skin-primary">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 xl:ml-6">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Total Products
                </p>
                <p className="text-2xl mt-0.5 font-semibold text-gray-900">
                  521
                </p>
              </div>
            </div>
            <div className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <div className="absolute inset-x-0 bottom-0 px-4 py-3.5 bg-white border-t border-gray-200 sm:px-6">
                <Link
                  to="/products/all-products"
                  title="products"
                  className={`flex items-center justify-between text-sm font-medium text-gray-600 transition-all duration-200 hover:text-skin-primary ${
                    isActive === "All Products" ? "active" : ""
                  }`}
                  onClick={() => handleActive("All Products")}
                >
                  View Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6">
            <div className="flex item-center">
              <div className="flex-shrink-0 w-12 h-12 p-3 rounded-md bg-skin-primary">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="ml-5 xl:ml-6">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Total Sales
                </p>
                <p className="text-2xl mt-0.5 font-semibold text-gray-900">
                  ₹71,897
                </p>
              </div>
            </div>
            <div className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <div className="absolute inset-x-0 bottom-0 px-4 py-3.5 bg-white border-t border-gray-200 sm:px-6">
                <Link
                  to="#"
                  title=""
                  className="flex items-center justify-between text-sm font-medium text-gray-600 transition-all duration-200 hover:text-skin-primary"
                >
                  View Sales
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden grid-cols-1 gap-4 mt-6 sm:gap-5 lg:grid-cols-2">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Total Customers
                </h3>
                <p className="text-sm text-gray-600">In Last 6 Months</p>
              </div>
            </div>
            <div className="py-2 border-t border-gray-200">
              <div id="totalCustomersChart"></div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Total Orders
                </h3>
                <p className="text-sm text-gray-600">In Last 6 Months</p>
              </div>
            </div>
            <div className="py-2 border-t border-gray-200">
              <div id="totalOrdersChart"></div>
            </div>
          </div>
        </div>
      </div>
      {/* END DASHBOARD SUB SECTION 1 */}
    </>
  );
}
