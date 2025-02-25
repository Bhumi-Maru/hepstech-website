import React from "react";
import { Link } from "react-router-dom";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";

export default function Store_Settings() {
  const { isActive, handleActive } = useAdminGlobalContext();
  return (
    <>
      {/* START STORE SETTING PAGE */}
      <div className="container">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Store Settings</h1>

        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
          {/* GENERAL SETTINGS */}
          <Link
            to="/general-settings"
            title="General Settings"
            className={`flex items-start group ${
              isActive === "General Settings" ? "active" : ""
            }`}
            onClick={() => handleActive("General Settings")}
          >
            <div className="flex items-center justify-center flex-none rounded-md w-14 h-14 bg-skin-primary">
              <svg
                className="w-8 h-8 text-white"
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
            </div>
            <div className="ml-4">
              <p className="font-semibold transition-all duration-200 group-hover:text-skin-primary">
                General
              </p>
              <p className="mt-1 text-sm text-gray-600">
                View and update your store information
              </p>
            </div>
          </Link>

          <a
            href="payment-methods.html"
            title="Payment Methods"
            className="flex items-start group"
          >
            <div className="flex items-center justify-center flex-none rounded-md w-14 h-14 bg-skin-primary">
              <svg
                className="w-8 h-8 text-white"
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
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold transition-all duration-200 group-hover:text-skin-primary">
                Payment Methods
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Enable and manage your store's payment providers
              </p>
            </div>
          </a>

          {/* ORDER SETTINGS */}
          <Link
            to="/order-settings"
            title="Order Settings"
            className={`flex items-start group ${
              isActive === "Order Settings" ? "active" : ""
            }`}
            onClick={() => handleActive("Order Settings")}
          >
            <div className="flex items-center justify-center flex-none rounded-md w-14 h-14 bg-skin-primary">
              <svg
                className="w-8 h-8 text-white"
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
            <div className="ml-4">
              <p className="font-semibold transition-all duration-200 group-hover:text-skin-primary">
                Orders
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Donec efficitur ullamcorper metus
              </p>
            </div>
          </Link>

          {/* PLANS & SUBSCRIPTIONS */}
          <Link
            to="/plans-subscriptions"
            title="Plans & Subscriptions"
            className="flex items-start group"
          >
            <div className="flex items-center justify-center flex-none rounded-md w-14 h-14 bg-skin-primary">
              <svg
                className="w-8 h-8 text-white"
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold transition-all duration-200 group-hover:text-skin-primary">
                Plans & Subscriptions
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Manage and view your plans and subscriptions
              </p>
            </div>
          </Link>

          {/* CHECKOUT SETTINGS */}
          <Link
            to="/checkout-settings"
            title="Checkout Settings"
            className={`flex items-start group ${
              isActive === "Checkout Settings" ? "active" : ""
            }`}
            onClick={() => handleActive("Checkout Settings")}
          >
            <div className="flex items-center justify-center flex-none rounded-md w-14 h-14 bg-skin-primary">
              <svg
                className="w-8 h-8 text-white"
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold transition-all duration-200 group-hover:text-skin-primary">
                Checkout
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Customize your online checkout process
              </p>
            </div>
          </Link>

          {/* WEBSITE SETTINGS */}
          <Link
            to="/website-settings"
            title="Website Settings"
            className="flex items-start group"
          >
            <div className="flex items-center justify-center flex-none rounded-md w-14 h-14 bg-skin-primary">
              <svg
                className="w-8 h-8 text-white"
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold transition-all duration-200 group-hover:text-skin-primary">
                Website
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Pellentesque consectetur condimentum nulla
              </p>
            </div>
          </Link>

          {/* APPLICATION SETTINGS */}
          <Link
            to="/application-settings"
            title="Application Settings"
            className={`flex items-start group ${
              isActive === "Application Settings" ? "active" : ""
            }`}
            onClick={() => handleActive("Application Settings")}
          >
            <div className="flex items-center justify-center flex-none rounded-md w-14 h-14 bg-skin-primary">
              <svg
                className="w-8 h-8 text-white"
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold transition-all duration-200 group-hover:text-skin-primary">
                Application
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Integer nisl ligula accumsan non tincidunt
              </p>
            </div>
          </Link>

          {/* PAGES */}
          <Link
            to="/pages"
            title="Pages"
            className={`flex items-start group ${
              isActive === "Pages" ? "active" : ""
            }`}
            onClick={() => handleActive("Pages")}
          >
            <div className="flex items-center justify-center flex-none rounded-md w-14 h-14 bg-skin-primary">
              <svg
                className="w-8 h-8 text-white"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold transition-all duration-200 group-hover:text-skin-primary">
                Pages
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Manage your store's pages such as privacy and terms.
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* END STORE SETTING PAGE */}
    </>
  );
}
