import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Sub_Category_Add_Modal() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  return (
    <>
      {/* START ADD SUB CATEGORY POPUP MODAL */}
      <div
        className="modal active"
        id="createSubCategoryModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5
                className="mr-12 text-lg font-bold truncate"
                id="exampleModalLabel"
              >
                Edit Sub Category
              </h5>

              {/* <!-- close button --> */}
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpenPopupModal(false)}
              >
                <span className="sr-only">Close</span>
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
            </div>

            <div className="modal-body">
              <form>
                <div className="space-y-4">
                  <div>
                    <label for=""> Sub Category Title </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter sub category title"
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mainCategory">Main Category</label>
                    <div className="relative mt-1">
                      <select
                        className="select2-hidden-accessible"
                        id="mainCategory"
                        name="mainCategory"
                        data-select2-id="select2-data-mainCategory"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="select2-data-2-0lfm">
                          Select Main Category
                        </option>
                        <option
                          value="category1"
                          data-select2-id="select2-data-5-91ve"
                        >
                          Main Category 1
                        </option>
                        <option
                          value="category2"
                          data-select2-id="select2-data-6-xpcr"
                        >
                          Main Category 2
                        </option>
                        <option
                          value="category3"
                          data-select2-id="select2-data-7-ugr1"
                        >
                          Main Category 3
                        </option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default select2-container--below"
                        dir="ltr"
                        data-select2-id="select2-data-1-1j5p"
                        style={{ width: "438px" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-mainCategory-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-mainCategory-container"
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
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label for=""> Image </label>
                    <div className="mt-1">
                      {/* <!-- <input type="file" id="formFile" name="" className="" /> --> */}
                      <button
                        type="button"
                        className="btn btn-white"
                        data-toggle="modal"
                        data-target="#selectFilesModal"
                      >
                        Select File
                      </button>
                    </div>
                  </div>

                  <div>
                    <label for=""> Status </label>
                    <div className="mt-1 toggle-switch">
                      <input
                        type="checkbox"
                        id="toggleSwitch"
                        role="checkbox"
                        tabindex="0"
                      />
                      <label for="toggleSwitch"></label>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  className="btn btn-light"
                  data-dismiss="modal"
                  aria-label="Close Modal"
                  onClick={() => setIsOpenPopupModal(false)}
                >
                  Discard
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END ADD SUB CATEGORY POPUP MODAL */}
    </>
  );
}
