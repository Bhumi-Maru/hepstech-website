import React from "react";
import { useProductContext } from "../../../context/Product_Create_Context";

export default function Create_Product_5_Variant() {
  const { isOpenProduct } = useProductContext();
  return (
    <>
      {/* CREATE PRODUCT SECTION 5 [variant product] */}

      <div
        className={isOpenProduct.variant_Product_Section_5 ? "block" : "hidden"}
        id="variantProduct"
      >
        <div className="px-4 pb-5 sm:px-5">
          <div className="flex items-center justify-between py-4 -mt-2">
            <label for="colorOptionStatus">Enable Color Option</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="colorOptionStatus"
                name="colorOptionStatus"
                role="checkbox"
                value=""
                tabindex="0"
              />
              <label for="colorOptionStatus"></label>
            </div>
          </div>
          <hr className="mb-4 border-gray-200" />
          <p className="text-xs font-medium text-gray-600">Options</p>

          <div
            // className={`py-4 ${
            //   isOpenProduct.Enable_Color_Option ? "block" : "hidden"
            // }`}
            className="py-4"
            id="colorOption"
          >
            <div className="sm:flex sm:items-start sm:space-x-4">
              <div className="w-full sm:w-36 xl:w-48">
                <label for="">Enter Color Name</label>
                <div className="mt-1 form-input">
                  <input
                    type="text"
                    id=""
                    name=""
                    placeholder=""
                    className=""
                  />
                </div>
              </div>

              <div className="flex-1 mt-2 sm:mt-0">
                <label for="">&nbsp;</label>
                <div className="flex items-center mt-1 space-x-2">
                  <input
                    type="color"
                    id="colorpicker"
                    name="color"
                    pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                    value="#000000"
                    className="block w-full border border-gray-300 rounded-md h-9"
                  />
                  <button type="button" className="btn btn-light">
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
                    Add
                  </button>
                </div>
                {/* <div className="flex flex-wrap items-center gap-3 mt-4">
                  <div className="flex items-center px-2 py-1.5 space-x-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                    <div
                      className="w-5 h-5 border border-gray-200 rounded-full"
                      style={{ background: "#000000" }}
                    ></div>
                    <span className="text-sm font-medium">Black</span>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="Remove"
                      data-microtip-position="top"
                      role="tooltip"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center px-2 py-1.5 space-x-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                    <div
                      className="w-5 h-5 border border-gray-200 rounded-full"
                      style={{ background: "#F97316" }}
                    ></div>
                    <span className="text-sm font-medium">Orange</span>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="Remove"
                      data-microtip-position="top"
                      role="tooltip"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="py-4 sm:flex sm:items-start sm:space-x-4">
              <div className="w-full sm:w-36 xl:w-48">
                <div className="flex items-center justify-between">
                  <label for="">Option 1</label>

                  <button
                    type="button"
                    className="p-0 text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-1 form-input">
                  <input
                    type="text"
                    id=""
                    name=""
                    placeholder=""
                    className=""
                  />
                </div>
              </div>

              <div className="flex-1 mt-2 sm:mt-0">
                <label className="invisible opacity-0">Option 1</label>
                <div className="flex items-start mt-1 space-x-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=""
                    className=""
                  />
                  <button type="button" className="btn btn-light">
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
                    Add
                  </button>
                </div>

                {/* <div>
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <div className="flex items-center px-2 py-1.5 space-x-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                      <span className="text-sm font-medium">LG</span>
                      <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Remove"
                        data-microtip-position="top"
                        role="tooltip"
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center px-2 py-1.5 space-x-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                      <span className="text-sm font-medium">XL</span>
                      <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Remove"
                        data-microtip-position="top"
                        role="tooltip"
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center px-2 py-1.5 space-x-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                      <span className="text-sm font-medium">XXL</span>
                      <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Remove"
                        data-microtip-position="top"
                        role="tooltip"
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-light">
            <svg
              className="w-5 h-5 mr-2 -ml-1 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add Option
          </button>
        </div>

        <div className="px-4 py-5 border-t border-gray-200 sm:px-5">
          <p className="text-xs font-medium text-gray-600">Variant Details</p>

          <div className="flow-root mt-2">
            <ul
              className="-my-2 divide-y divide-gray-200 accordion"
              id="variantsAccordion"
            >
              <li className="accordion-item">
                <dt className="accordion-header">
                  <button
                    type="button"
                    className="accordion-button"
                    data-toggle="collapse"
                    data-target="#variantOne"
                  >
                    <span className="font-medium text-gray-900">
                      Variant 01
                    </span>
                    <span className="flex items-center ml-6 accordion-control h-7">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 transform"
                      >
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </dt>

                <dd
                  id="variantOne"
                  className="accordion-collapse"
                  data-parent="#variantsAccordion"
                >
                  <div className="accordion-content">
                    <div className="grid items-end grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                      <div>
                        <label for="">Color</label>
                        <div className="relative mt-1">
                          <div className="cselect">
                            <div className="input-field"></div>
                            <ul className="dropdown-custom">
                              <li className="dropdown-custom-item">
                                <div className="flex items-center space-x-2">
                                  <div
                                    className="w-4 h-4 border border-gray-200 rounded-full"
                                    style={{ background: "#000000" }}
                                  ></div>
                                  <span className="text-sm font-medium">
                                    Black
                                  </span>
                                </div>
                              </li>

                              <li className="dropdown-custom-item">
                                <div className="flex items-center space-x-2">
                                  <div
                                    className="w-4 h-4 border border-gray-200 rounded-full"
                                    style={{ background: "#F97316" }}
                                  ></div>
                                  <span className="text-sm font-medium">
                                    Orange
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="">Option 1</label>
                        <div className="relative mt-1">
                          <select name="" id="" className="custom-select">
                            <option value="">Select</option>
                            <option value="">Some Option 1</option>
                            <option value="">Some Option 2</option>
                            <option value="">Some Option 3</option>
                            <option value="">Some Option 4</option>
                            <option value="">Some Option 5</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="">Option 2</label>
                        <div className="relative mt-1">
                          <select name="" id="" className="custom-select">
                            <option value="">Select</option>
                            <option value="">Some Option</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="">Option 3</label>
                        <div className="relative mt-1">
                          <select name="" id="" className="custom-select">
                            <option value="">Select</option>
                            <option value="">Some Option</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="">MRP Price</label>
                        <div className="relative mt-1 rounded-md">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">₹</span>
                          </div>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="!pl-7"
                            placeholder="0.00"
                          />
                        </div>
                      </div>

                      <div>
                        <label for="">Selling Price</label>
                        <div className="relative mt-1 rounded-md">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">₹</span>
                          </div>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="!pl-7"
                            placeholder="0.00"
                          />
                        </div>
                      </div>

                      <div>
                        <label for="">SKU</label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="0"
                            className=""
                          />
                        </div>
                      </div>

                      <div>
                        <label for="">Quantity</label>
                        <div className="mt-1">
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="0"
                            className=""
                          />
                        </div>
                      </div>

                      <div className="col-span-2 sm:col-span-1 xl:col-span-3">
                        <label for="">Select Image</label>
                        <div className="mt-1 file-input">
                          <input type="file" />
                          <label className="label" data-js-label>
                            No file selected
                          </label>
                          <span className="button">Choose</span>
                        </div>
                      </div>

                      <div>
                        <button type="button" className="btn btn-error-light">
                          <svg
                            className="w-4 h-4 mr-2 -ml-1"
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
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </dd>
              </li>

              <li className="accordion-item">
                <dt className="accordion-header">
                  <button
                    type="button"
                    className="accordion-button"
                    data-toggle="collapse"
                    data-target="#variantTwo"
                  >
                    <span className="font-medium text-gray-900">
                      Variant 02
                    </span>
                    <span className="flex items-center ml-6 accordion-control h-7">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 transform"
                      >
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </dt>

                <dd
                  id="variantTwo"
                  className="accordion-collapse"
                  data-parent="#variantsAccordion"
                >
                  <div className="accordion-content">
                    <div className="grid items-end grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                      <div>
                        <label for="">Color</label>
                        <div className="relative mt-1">
                          <div className="cselect">
                            <div className="input-field"></div>
                            <ul className="dropdown-custom">
                              <li className="dropdown-custom-item">
                                <div className="flex items-center space-x-2">
                                  <div
                                    className="w-4 h-4 border border-gray-200 rounded-full"
                                    style={{ background: "#000000" }}
                                  ></div>
                                  <span className="text-sm font-medium">
                                    Black
                                  </span>
                                </div>
                              </li>

                              <li className="dropdown-custom-item">
                                <div className="flex items-center space-x-2">
                                  <div
                                    className="w-4 h-4 border border-gray-200 rounded-full"
                                    style={{ background: "#F97316" }}
                                  ></div>
                                  <span className="text-sm font-medium">
                                    Orange
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="">Option 1</label>
                        <div className="relative mt-1">
                          <select name="" id="" className="custom-select">
                            <option value="">Select</option>
                            <option value="">Some Option 1</option>
                            <option value="">Some Option 2</option>
                            <option value="">Some Option 3</option>
                            <option value="">Some Option 4</option>
                            <option value="">Some Option 5</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="">Option 2</label>
                        <div className="relative mt-1">
                          <select name="" id="" className="custom-select">
                            <option value="">Select</option>
                            <option value="">Some Option</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="">Option 3</label>
                        <div className="relative mt-1">
                          <select name="" id="" className="custom-select">
                            <option value="">Select</option>
                            <option value="">Some Option</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="">MRP Price</label>
                        <div className="relative mt-1 rounded-md">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">₹</span>
                          </div>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="!pl-7"
                            placeholder="0.00"
                          />
                        </div>
                      </div>

                      <div>
                        <label for="">Selling Price</label>
                        <div className="relative mt-1 rounded-md">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">₹</span>
                          </div>
                          <input
                            type="number"
                            name=""
                            id=""
                            className="!pl-7"
                            placeholder="0.00"
                          />
                        </div>
                      </div>

                      <div>
                        <label for="">SKU</label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="0"
                            className=""
                          />
                        </div>
                      </div>

                      <div>
                        <label for="">Quantity</label>
                        <div className="mt-1">
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="0"
                            className=""
                          />
                        </div>
                      </div>

                      <div className="col-span-2 sm:col-span-1 xl:col-span-3">
                        <label for="">Select Image</label>
                        <div className="mt-1 file-input">
                          <input type="file" />
                          <label className="label" data-js-label>
                            No file selected
                          </label>
                          <span className="button">Choose</span>
                        </div>
                      </div>

                      <div>
                        <button type="button" className="btn btn-error-light">
                          <svg
                            className="w-4 h-4 mr-2 -ml-1"
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
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </dd>
              </li>
            </ul>
          </div>

          <button type="button" className="mt-3 btn btn-light">
            <svg
              className="w-5 h-5 mr-2 -ml-1 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add Variant
          </button>
        </div>
      </div>
    </>
  );
}
