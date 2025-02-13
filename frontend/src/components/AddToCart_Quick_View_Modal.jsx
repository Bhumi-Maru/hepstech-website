import React from "react";

export default function AddToCart_Quick_View_Modal() {
  return (
    <>
      <div
        className="modal active"
        id="quickViewModal"
        role="dialog"
        aria-hidden="false"
        tabindex="-1"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog sm:max-w-3xl">
          <div className="modal-content" role="document">
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="sr-only"> Close </span>
              <svg
                className="w-6 h-6"
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="p-5 sm:p-7 modal-body">
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-8">
                <div>
                  <div className="relative">
                    <button
                      type="button"
                      className="absolute z-10 flex items-center justify-center w-8 h-8 transition-all duration-200 bg-gray-100 rounded-full shadow hover:bg-red-600 hover:text-white top-5 right-5"
                    >
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>

                    <div className="flex-shrink-0 overflow-hidden bg-gray-200 rounded-md aspect-w-1 aspect-h-1">
                      <img
                        className="object-cover w-full h-full"
                        src=""
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="flex items-center mt-5 space-x-4">
                    <button type="button" className="btn btn-primary">
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      </svg>
                      Add to Cart
                    </button>

                    <button type="button" className="btn btn-primary-light">
                      Buy Now
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-xl font-semibold">
                    Sassie Basic 31 LTR Navy Backpack Waterproof School Bag
                  </p>

                  <div className="flex items-center mt-3 space-x-2">
                    <span className="inline-block text-lg font-bold">
                      ₹12,899/-
                    </span>
                    <s className="inline-block text-base text-gray-500">
                      ₹12,899/-
                    </s>
                  </div>

                  <div className="mt-3">
                    <label for=""> Quantity </label>

                    <div className="relative w-24 mt-1 overflow-hidden border border-gray-300 rounded-md focus-within:border-skin-primary focus-within:ring-1 focus-within:ring-skin-primary">
                      <button
                        type="button"
                        className="absolute top-0 right-0 px-1 py-[2.5px] border-l border-gray-300 rounded-none focus:outline-none addQty hover:bg-gray-100"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </button>

                      <input
                        type="text"
                        name=""
                        id="productQty"
                        value="1"
                        min="1"
                        max="100"
                        className="!w-24 py-2 sm:py-2.5 !border-none font-semibold rounded-none"
                      />

                      <button
                        type="button"
                        className="absolute bottom-0 right-0 px-1 py-[2.5px] border-t border-l border-gray-300 rounded-none focus:outline-none subQty hover:bg-gray-100"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flow-root mt-4">
                    <ul className="-my-3 divide-y divide-gray-200">
                      <li className="py-4">
                        <p className="text-sm text-gray-600">Size</p>

                        <span className="relative z-0 flex flex-shrink-0 mt-3 space-x-3 radio-group">
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
                      </li>

                      <li className="py-4">
                        <p className="text-sm text-gray-600">Color</p>

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
