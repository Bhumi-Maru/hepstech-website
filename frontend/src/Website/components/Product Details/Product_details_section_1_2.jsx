import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Product_details_section_1_2({
  setIsSizeChartModalOpen,
  prodcutDetails,
}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      {/* PRODUCT DETAILS SECTION 1 PART 2 */}
      <div className="lg:col-span-3">
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center w-full space-x-4 overflow-x-auto">
            <li>
              <div>
                <a href="#" className="text-gray-400 hover:text-skin-primary">
                  <svg
                    className="flex-shrink-0 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a
                  href="#"
                  title=""
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-skin-primary"
                >
                  Shop
                </a>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a
                  href="#"
                  title=""
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-skin-primary"
                  aria-current="page"
                >
                  Mobile Phone Mounts & Stands
                </a>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-xl font-extrabold text-gray-900 sm:mt-5 sm:text-2xl xl:text-3xl">
          Sassie Basic 31 LTR Navy Backpack Waterproof School Bag
        </h1>

        <div className="flex items-center flex-1 mt-4 space-x-3">
          <span className="inline-block text-xl font-medium">₹12,899/-</span>
          <s className="inline-block text-base text-gray-500">₹12,899/-</s>
        </div>

        <div className="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-6 h-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-6 h-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-6 h-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-6 h-6 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <a
              href="#customerReviews"
              title="View All Reviews"
              className="text-sm text-gray-600 hover:text-skin-primary hover:underline"
            >
              (132 reviews)
            </a>
          </div>

          <Link
            title="View Size Chart"
            className="inline-flex items-center mt-5 text-xs font-semibold uppercase sm:mt-0 text-skin-primary"
            role="button"
            data-toggle="modal"
            data-target="#sizeChartModal"
            onClick={() => setIsSizeChartModalOpen(true)}
          >
            View Size Chart
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <hr className="mt-6 mb-4 border-gray-200" />

        <div className="flow-root">
          <ul className="-my-4 divide-y divide-gray-200">
            <li className="py-4 sm:flex sm:items-center sm:justify-between">
              <p className="text-sm font-semibold">Size</p>

              <div className="mt-3 sm:mt-0">
                <span className="relative z-0 flex flex-shrink-0 space-x-3 radio-group">
                  <div className="relative flex-1 custom-radio sm:flex-none">
                    <label for="extraSmallSize" className="sr-only">
                      Extra Small
                    </label>
                    <div className="toggle-radio">
                      <input
                        type="radio"
                        id="extraSmallSize"
                        role="radio"
                        tabindex="0"
                        name="type"
                      />
                      <label for="extraSmallSize"> XS </label>
                    </div>
                  </div>

                  <div className="relative flex-1 custom-radio sm:flex-none">
                    <label for="smallSize" className="sr-only">
                      {" "}
                      SM{" "}
                    </label>
                    <div className="toggle-radio">
                      <input
                        type="radio"
                        id="smallSize"
                        role="radio"
                        tabindex="0"
                        name="type"
                      />
                      <label for="smallSize"> SM </label>
                    </div>
                  </div>

                  <div className="relative flex-1 custom-radio sm:flex-none">
                    <label for="mediumSize" className="sr-only">
                      {" "}
                      MD{" "}
                    </label>
                    <div className="toggle-radio">
                      <input
                        type="radio"
                        id="mediumSize"
                        role="radio"
                        tabindex="0"
                        name="type"
                      />
                      <label for="mediumSize"> MD </label>
                    </div>
                  </div>

                  <div className="relative flex-1 custom-radio sm:flex-none">
                    <label for="largeSize" className="sr-only">
                      {" "}
                      LG{" "}
                    </label>
                    <div className="toggle-radio">
                      <input
                        type="radio"
                        id="largeSize"
                        role="radio"
                        tabindex="0"
                        name="type"
                      />
                      <label for="largeSize"> LG </label>
                    </div>
                  </div>

                  <div className="relative flex-1 custom-radio sm:flex-none">
                    <label for="extraLargeSize" className="sr-only">
                      XL
                    </label>
                    <div className="toggle-radio">
                      <input
                        type="radio"
                        id="extraLargeSize"
                        role="radio"
                        tabindex="0"
                        name="type"
                      />
                      <label for="extraLargeSize"> XL </label>
                    </div>
                  </div>
                </span>
              </div>
            </li>

            <li className="py-4 sm:flex sm:items-center sm:justify-between">
              <p className="text-sm font-semibold">Color</p>

              <div className="inline-grid grid-cols-5 mt-3 gap-x-3 gap-y-1.5">
                <div>
                  <label className="form-colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="white"
                      className="form-colorinput-input"
                    />
                    <span className="bg-blue-600 form-colorinput-color"></span>
                  </label>
                </div>

                <div>
                  <label className="form-colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="white"
                      className="form-colorinput-input"
                    />
                    <span className="bg-red-600 form-colorinput-color"></span>
                  </label>
                </div>

                <div>
                  <label className="form-colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="white"
                      className="form-colorinput-input"
                    />
                    <span className="bg-purple-500 form-colorinput-color"></span>
                  </label>
                </div>

                <div>
                  <label className="form-colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="white"
                      className="form-colorinput-input"
                    />
                    <span className="bg-indigo-600 form-colorinput-color"></span>
                  </label>
                </div>

                <div>
                  <label className="form-colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="white"
                      className="form-colorinput-input"
                    />
                    <span className="bg-yellow-500 form-colorinput-color"></span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-6 space-y-3 sm:flex sm:items-end sm:justify-between sm:space-y-0">
          <div className="flex items-end space-x-4">
            <div>
              <label htmlFor="productQty">Quantity</label>

              <div className="relative w-24 mt-1 overflow-hidden border border-gray-300 rounded-md focus-within:border-skin-primary focus-within:ring-1 focus-within:ring-skin-primary">
                {/* INCREMENT BUTTON */}
                <button
                  type="button"
                  className="absolute top-0 right-0 px-1 py-[2.5px] border-l border-gray-300 rounded-none focus:outline-none addQty hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </button>

                <input
                  type="number"
                  name="productQty"
                  id="productQty"
                  value={quantity}
                  min="1"
                  max="100"
                  onChange={(e) =>
                    setQuantity(Math.max(1, Math.min(100, e.target.value)))
                  }
                  className="!w-24 py-2 sm:py-2.5 !border-none font-semibold rounded-none"
                />

                {/* DECREMENT BUTTON */}
                <button
                  type="button"
                  className="absolute bottom-0 right-0 px-1 py-[2.5px] border-t border-l border-gray-300 rounded-none focus:outline-none subQty hover:bg-gray-100"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <button type="button" className="w-full btn btn-primary sm:w-auto">
              <svg
                className="w-4 h-4 mr-2 lg:hidden xl:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              Add to Cart
            </button>
          </div>

          <div className="space-y-3 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
            <button
              type="button"
              className="w-full mr-auto sm:ml-4 btn btn-primary-light sm:w-auto"
            >
              Buy Now
            </button>

            <button type="button" className="w-full btn btn-white sm:w-auto">
              <svg
                className="w-4 h-4 mr-2 lg:hidden xl:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Add to Wishlist
            </button>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-600">Share This:</span>

          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="#"
                title=""
                className="inline-flex text-gray-500 transition-all duration-200 hover:text-gray-700"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only"> Facebook </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.001,2.002c-5.522,0-9.999,4.477-9.999,9.999c0,4.99,3.656,9.126,8.437,9.879v-6.988h-2.54v-2.891h2.54V9.798 c0-2.508,1.493-3.891,3.776-3.891c1.094,0,2.24,0.195,2.24,0.195v2.459h-1.264c-1.24,0-1.628,0.772-1.628,1.563v1.875h2.771 l-0.443,2.891h-2.328v6.988C18.344,21.129,22,16.992,22,12.001C22,6.479,17.523,2.002,12.001,2.002z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="inline-flex text-gray-500 transition-all duration-200 hover:text-gray-700"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only"> Twitter </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="inline-flex text-gray-500 transition-all duration-200 hover:text-gray-700"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only"> Pinterest </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M-111.052-244.992c-5.518,0-9.99,4.473-9.99,9.99c0,4.232,2.633,7.85,6.35,9.306 c-0.088-0.79-0.166-2.006,0.034-2.868c0.182-0.78,1.172-4.966,1.172-4.966s-0.299-0.599-0.299-1.484 c0-1.388,0.805-2.425,1.808-2.425c0.853,0,1.264,0.64,1.264,1.407c0,0.858-0.546,2.139-0.827,3.327 c-0.235,0.994,0.499,1.805,1.479,1.805c1.775,0,3.141-1.872,3.141-4.575c0-2.392-1.719-4.064-4.173-4.064 c-2.843,0-4.512,2.132-4.512,4.335c0,0.858,0.331,1.779,0.744,2.28c0.081,0.099,0.093,0.185,0.069,0.286 c-0.076,0.315-0.245,0.994-0.277,1.133c-0.044,0.183-0.145,0.222-0.335,0.134c-1.247-0.581-2.027-2.405-2.027-3.871 c0-3.151,2.289-6.045,6.601-6.045c3.466,0,6.159,2.469,6.159,5.77c0,3.444-2.171,6.213-5.184,6.213 c-1.013,0-1.964-0.525-2.29-1.146c0,0-0.501,1.907-0.623,2.374c-0.225,0.868-0.834,1.956-1.241,2.62 c0.935,0.289,1.928,0.445,2.958,0.445c5.517,0,9.99-4.473,9.99-9.99S-105.535-244.992-111.052-244.992"
                    transform="translate(123.042 246.992)"
                  ></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="inline-flex text-gray-500 transition-all duration-200 hover:text-gray-700"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only"> LinkedIn </span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667 v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548 S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248 h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="inline-flex text-gray-500 transition-all duration-200 hover:text-gray-700"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only"> Email </span>
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
