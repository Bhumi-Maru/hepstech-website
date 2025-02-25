import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Home_Page_Section_4() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* [HOME PAGE SECTION 4] Flash Sale Slider  */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            for="flashSaleSliderStatus"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Flash Sale Slider
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="flashSaleSliderStatus"
              role="checkbox"
              tabindex="0"
              checked={toggleStates.flashSaleSlider}
              onChange={() => handleToggle("flashSaleSlider")}
            />
            <label for="flashSaleSliderStatus"></label>
          </div>
        </div>

        {toggleStates.flashSaleSlider && (
          <>
            <div
              className="mt-4"
              id="flashSaleSliderContent"
              style={{ display: "block" }}
            >
              <div className="max-w-xs">
                <div>
                  <label for=""> Set Timer for Flash Sale </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id="setTimer"
                      placeholder="Enter days"
                      className=""
                      autofocus="false"
                      readonly=""
                      checked={toggleStates.flashSaleSlider}
                      onChange={() => handleToggle("flashSaleSlider")}
                    />
                  </div>
                  <div></div>
                </div>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter section title"
                      className=""
                    />
                  </div>
                  <div></div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div className="relative mt-1">
                    <select
                      className="select2-hidden-accessible"
                      id="selectMainCategory"
                      name="selectMainCategory"
                      data-select2-id="select2-data-selectMainCategory"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="select2-data-2-t5ss">
                        Select Main Category
                      </option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-1-ymhq"
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-selectMainCategory-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-selectMainCategory-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select Main Category"
                          >
                            Select Main Category
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>

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
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div className="relative mt-1">
                    <select
                      className="select2-hidden-accessible"
                      id="selectSubCategory"
                      name="selectSubCategory"
                      data-select2-id="select2-data-selectSubCategory"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="select2-data-4-tmno">
                        Select Sub Category
                      </option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-3-6ayh"
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-selectSubCategory-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-selectSubCategory-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select Sub Category"
                          >
                            Select Sub Category
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>

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
                  <label for=""> Select Layout Type </label>
                  <div className="mt-1 form-input">
                    <select name="" id="" placeholder="0" className="">
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  className="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                  onClick={() => toggleModal("flashSaleSlider")}
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
                    ></path>
                  </svg>
                  Add Products
                </button>

                <div className="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" className="btn btn-dark-light">
                    Discard
                  </button>

                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
