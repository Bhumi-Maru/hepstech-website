import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";
import { fetchHeaderData } from "../../utils/fileUploadUtils";

export default function Sidebar() {
  const { isActive, handleActive, isDropdownOpen, setIsDropdownOpen } =
    useAdminGlobalContext();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchHeaderData(setFormData);
  }, []);

  console.log("ffffff", formData);
  return (
    <>
      {/* <!-- START SIDEBAR (FOR DESKTOP) --> */}
      <nav className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col flex-1 w-56 border-r border-gray-200 2xl:w-64">
          <div className="relative flex-shrink-0 px-4 bg-white border-b border-gray-200">
            <Link
              to="/dashboard"
              title="Hepstech"
              className={`flex items-center h-14 ${
                isActive === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleActive("Dashboard")}
            >
              {formData?.adminLogo?.filePath && (
                <img
                  className="w-auto h-10"
                  src={`http://localhost:7000${formData.adminLogo.filePath}`}
                  alt="Logo"
                />
              )}
              {/* <p className="ml-3 text-2xl font-extrabold leading-none tracking-tight truncate">
                {" "}
                Hepstech{" "}
              </p> */}
            </Link>
          </div>

          <div className="relative z-0 flex-1 overflow-x-hidden overflow-y-auto focus:outline-none">
            <div className="flex flex-col justify-between min-h-full">
              <div className="flex flex-col flex-grow pr-4 mt-4">
                <div className="flex-1 space-y-1">
                  {/* Dashboard */}
                  <Link
                    to="/dashboard"
                    title="Dashboard"
                    className={`nav-link ${
                      isActive === "Dashboard" ? "active" : ""
                    }`}
                    onClick={() => handleActive("Dashboard")}
                  >
                    <svg
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Dashboard
                  </Link>

                  {/* All Media */}
                  <Link
                    to="/all-media"
                    title="All Media"
                    className={`nav-link ${
                      isActive === "All Media" ? "active" : ""
                    }`}
                    onClick={() => handleActive("All Media")}
                  >
                    <svg
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    All Media
                  </Link>

                  {/* CATEGORIES */}
                  <Link
                    to="/categories"
                    title="Categories"
                    data-toggle="collapse"
                    data-target="#categoryLinks"
                    className={`nav-link ${
                      isActive === "Categories" ? "active" : ""
                    }`}
                    onClick={() => {
                      handleActive("Categories");
                      setIsDropdownOpen((prev) => !prev);
                    }}
                  >
                    <svg
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
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    Categories
                    <svg
                      className={`w-5 h-5 ml-auto transform transition-transform ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>

                  {/* MAIN CATEGORIES */}
                  <div
                    className="hidden mt-2 space-y-1 collapse"
                    id="categoryLinks"
                  >
                    <Link
                      to="/categories/main-categories"
                      title="Main Categories"
                      className={`!pl-12 nav-link ${
                        isActive === "Main Categories" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Main Categories")}
                    >
                      Main Categories
                    </Link>

                    {/* SUB CATEGORIES */}
                    <Link
                      to="/categories/sub-categories"
                      title="Sub Categories"
                      className={`!pl-12 nav-link ${
                        isActive === "Sub Categories" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Sub Categories")}
                    >
                      Sub Categories
                    </Link>
                  </div>

                  {/* PRODUCTS */}
                  <a
                    href="#"
                    title="Products"
                    className={`nav-link ${
                      isActive === "Products" ? "active" : ""
                    }`}
                    onClick={() => handleActive("Products")}
                    data-toggle="collapse"
                    data-target="#productsLinks"
                  >
                    <svg
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
                    Products
                    <svg
                      className="w-5 h-5 ml-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>

                  <div
                    className="hidden mt-2 space-y-1 collapse"
                    id="productsLinks"
                  >
                    {/* ALL PRODDUCTS */}
                    <Link
                      to="/products/all-products"
                      title="All Products"
                      className={`!pl-12 nav-link ${
                        isActive === "All Products" ? "active" : ""
                      }`}
                      onClick={() => handleActive("All Products")}
                    >
                      All Products
                    </Link>

                    {/* CREATE PRODUCTS */}
                    <Link
                      to="/products/create-product"
                      title="Create Product"
                      className={`!pl-12 nav-link ${
                        isActive === "Create Products" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Create Products")}
                    >
                      Create Product
                    </Link>

                    {/* PRODUCT REVIEWS */}
                    <Link
                      to="/products/product-reviews"
                      title="Product Reviews"
                      className={`!pl-12 nav-link ${
                        isActive === "Products Reviews" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Products Reviews")}
                    >
                      Product Reviews
                    </Link>
                  </div>

                  {/* ORDERS */}
                  <Link
                    to="/orders"
                    title="Orders"
                    className={`nav-link ${
                      isActive === "Orders" ? "active" : ""
                    }`}
                    onClick={() => handleActive("Orders")}
                  >
                    <svg
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
                    Orders
                    <span className="px-3 py-1 ml-auto text-sm bg-gray-200 rounded-full">
                      11
                    </span>
                  </Link>

                  {/* CUSTOMERS */}
                  <Link
                    to="/customers"
                    title="Customers"
                    className={`nav-link ${
                      isActive === "Customers" ? "active" : ""
                    }`}
                    onClick={() => handleActive("Customers")}
                  >
                    <svg
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
                    Customers
                  </Link>

                  {/* COUPON CODES */}
                  <Link
                    to="/coupon-codes"
                    title="Coupon Codes"
                    className={`nav-link ${
                      isActive === "Coupon Codes" ? "active" : ""
                    }`}
                    onClick={() => handleActive("Coupon Codes")}
                  >
                    <svg
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
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                      />
                    </svg>
                    Coupon Codes
                  </Link>

                  {/* SHIPPING PAGE */}
                  <Link
                    to="/shipping"
                    title="Shipping"
                    className={`nav-link ${
                      isActive === "Shipping" ? "active" : ""
                    }`}
                    onClick={() => handleActive("Shipping")}
                  >
                    <svg
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Shipping
                  </Link>

                  {/* TIME SLOTS */}
                  <Link
                    to="/time-slots"
                    title="Time Slots"
                    className={`nav-link ${
                      isActive === "Time Slots" ? "active" : ""
                    }`}
                    onClick={() => handleActive("Time Slots")}
                  >
                    <svg
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Time Slots
                  </Link>

                  {/* WEBSITE SETUP */}
                  <Link
                    to="#"
                    title="Website Setup"
                    className={`nav-link ${
                      isActive === "Website Setup" ? "active" : ""
                    }`}
                    onClick={() => handleActive("Website Setup")}
                    data-toggle="collapse"
                    data-target="#websiteSetupLinks"
                  >
                    <svg
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
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                    Website Setup
                    <svg
                      className="w-5 h-5 ml-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>

                  <div
                    className="hidden mt-2 space-y-1 collapse"
                    id="websiteSetupLinks"
                  >
                    {/* Header Section */}
                    <Link
                      to="/website-setup/header-section"
                      title="Header Section"
                      className={`!pl-12 nav-link ${
                        isActive === "Header Section" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Header Section")}
                    >
                      Header Section
                    </Link>
                    <Link
                      to="/website-setup/header-menu"
                      title="Header Menu"
                      className={`!pl-12 nav-link ${
                        isActive === "Header Menu" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Header Menu")}
                    >
                      Header Menu
                    </Link>
                    <Link
                      to="/website-setup/home-page"
                      title="Home Page"
                      className={`!pl-12 nav-link ${
                        isActive === "Home Page" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Home Page")}
                    >
                      Home Page
                    </Link>
                    <Link
                      to="/website-setup/footer-section"
                      title="Footer Section"
                      className={`!pl-12 nav-link ${
                        isActive === "Footer Section" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Footer Section")}
                    >
                      Footer Section
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-2 border-t border-gray-200">
            <div className="flex-shrink-0 block w-full pr-4 mt-2">
              {/* STORE SETTING  */}
              <Link
                to="/store-settings"
                title="Store Settings"
                className={`nav-link ${
                  isActive === "Store Settings" ? "active" : ""
                }`}
                onClick={() => handleActive("Store Settings")}
              >
                <svg
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Store Settings
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- END SIDEBAR (FOR DESKTOP) --> */}
    </>
  );
}
