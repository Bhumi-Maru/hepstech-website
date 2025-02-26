import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Home_Page_Section__14() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  return (
    <>
      {/* [HOME PAGE SECTION 14] Best Selling Products Slider 02   */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            for="bestSellingProducts02Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Best Selling Products Slider 02
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="bestSellingProducts02Status"
              role="checkbox"
              tabindex="0"
              checked={toggleStates.best_Selling_Products_Slider_02_Section_14}
              onChange={() =>
                handleToggle("best_Selling_Products_Slider_02_Section_14")
              }
            />
            <label for="bestSellingProducts02Status"></label>
          </div>
        </div>

        {toggleStates.best_Selling_Products_Slider_02_Section_14 && (
          <>
            <div
              className="mt-4"
              id="bestSellingProducts02Content"
              style={{ display: "block" }}
            >
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
                      className=""
                      id="selectMainCategory"
                      name="selectMainCategory"
                    >
                      <option value="">Select Main Category</option>
                      <option value="">Main Category 1</option>
                      <option value="">Main Category 2</option>
                      <option value="">Main Category 3</option>
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
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div className="relative mt-1">
                    <select
                      className=""
                      id="selectSubCategory"
                      name="selectSubCategory"
                    >
                      <option value="">Select Sub Category</option>
                      <option value="">Sub Category 1</option>
                      <option value="">Sub Category 2</option>
                      <option value="">Sub Category 3</option>
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
                  onClick={() =>
                    toggleModal("best_Selling_Products_Slider_02_Section_14")
                  }
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
