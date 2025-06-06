import React from "react";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";
import { Link } from "react-router-dom";

export default function Small_Screen_SideBar() {
  const {
    isActive,
    handleActive,
    setIsDropdownOpen,
    isDropdownOpen,
    isOpenPopupModal,
    setIsOpenPopupModal,
    toggleDropdown,
  } = useAdminGlobalContext();
  return (
    <>
      <aside
        className={`max-w-xs sm:max-w-sm drawer drawer-left ${
          isOpenPopupModal?.small_Screen_Sidebar ? "active" : "hidden"
        }`}
        id="mobileNavigation"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="h-16 drawer-header">
          <div className="flex items-center flex-shrink-0">
            <svg
              className="w-10 h-10 text-skin-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 32"
              fill="currentColor"
            >
              <path d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"></path>
              <path d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"></path>
            </svg>
            <p className="ml-3 text-2xl font-extrabold leading-none tracking-tight truncate">
              Hepstech
            </p>
          </div>

          {/* <!-- close button --> */}
          <button
            type="button"
            className="btn-close"
            data-dismiss="drawer"
            aria-label="Close"
            onClick={() => setIsOpenPopupModal(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          <nav className="flex flex-col flex-grow h-full overflow-y-auto">
            <div className="flex-1 pr-4 mt-4 space-y-1">
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
                  ></path>
                </svg>
                Dashboard
              </Link>

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
                  ></path>
                </svg>
                All Media
              </Link>

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
                  toggleDropdown("categories");
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
                  ></path>
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
                  ></path>
                </svg>
              </Link>

              {isDropdownOpen.categories && (
                <>
                  <div className="mt-2 space-y-1 collapse" id="categoryLinks">
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
                </>
              )}

              <Link
                to="/products"
                title="Products"
                className={`nav-link ${
                  isActive === "Products" ? "active" : ""
                }`}
                onClick={() => {
                  handleActive("Products");
                  toggleDropdown("products");
                }}
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
                  ></path>
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
                  ></path>
                </svg>
              </Link>

              {isDropdownOpen.products && (
                <>
                  <div className="mt-2 space-y-1 collapse" id="productsLinks">
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

                    <Link
                      to="/products/create-product"
                      title="Create Product"
                      className={`!pl-12 nav-link ${
                        isActive === "Create Products" ? "active" : ""
                      }`}
                      onClick={() => handleActive("Create products")}
                    >
                      Create Product
                    </Link>

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
                </>
              )}

              <Link
                to="/orders"
                title="Orders"
                className={`nav-link ${isActive === "Orders" ? "active" : ""}`}
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
                  ></path>
                </svg>
                Orders
                <span className="px-3 py-1 ml-auto text-sm bg-gray-200 rounded-full">
                  11
                </span>
              </Link>

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
                  ></path>
                </svg>
                Customers
              </Link>

              <Link
                to="/coupon-codes"
                title=" Coupon Codes"
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
                  ></path>
                </svg>
                Coupon Codes
              </Link>

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
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Shipping
              </Link>

              <Link
                to="/website-setup"
                title="Website Setup"
                className={`nav-link ${
                  isActive === "Website Setup" ? "active" : ""
                }`}
                onClick={() => {
                  handleActive("Website Setup");
                  toggleDropdown("website_Setup");
                }}
                data-toggle="collapse"
                data-target="#websiteSetupLinks"
                aria-current="page"
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
                  ></path>
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
                  ></path>
                </svg>
              </Link>

              {isDropdownOpen.website_Setup && (
                <>
                  <div
                    className="mt-2 space-y-1 collapse"
                    id="websiteSetupLinks"
                    style={{ display: "block" }}
                  >
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
                      aria-current="page"
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
                </>
              )}
            </div>

            <div className="flex-shrink-0 block w-full pb-4 pr-4 mt-5 space-y-1">
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
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Store Settings
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
