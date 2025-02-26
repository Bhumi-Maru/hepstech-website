import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Add_Banner_Section_5_Popup_Modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();

  return (
    <>
      {/* Add Banner Popup Modal Section 5 */}
      <div
        className={`modal ${
          isOpenPopupModal.horizontal_Banners_3_Items ? "active" : ""
        }`}
        id="addMainBannerModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div class="modal-overlay" tabindex="-1"></div>
        <div class="modal-dialog modal-dialog-centered sm:max-w-xl">
          <div class="modal-content" role="document">
            <div class="modal-header">
              <h5 class="mr-12 text-lg font-medium truncate">
                Add Main Banner
              </h5>

              {/* <!-- close button --> */}
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpenPopupModal(false)}
              >
                <span class="sr-only">Close</span>
                <svg
                  class="w-6 h-6"
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

            <div class="modal-body">
              <form action="">
                <div class="space-y-4">
                  <div>
                    <label for=""> Select Main Category </label>
                    <div class="relative mt-1">
                      <select
                        class=""
                        id="selectMainCategory"
                        name="selectMainCategory"
                      >
                        <option value="">Select Main Category</option>
                        <option value="">Main Category 1</option>
                        <option value="">Main Category 2</option>
                        <option value="">Main Category 3</option>
                      </select>

                      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          class="w-5 h-5 text-gray-500"
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
                    <label for=""> Select Sub Category </label>
                    <div class="relative mt-1">
                      <select
                        class=""
                        id="selectSubCategory"
                        name="selectSubCategory"
                      >
                        <option value="">Select Sub Category</option>
                        <option value="">Sub Category 1</option>
                        <option value="">Sub Category 2</option>
                        <option value="">Sub Category 3</option>
                      </select>

                      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          class="w-5 h-5 text-gray-500"
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
                    <label for=""> Select Product </label>
                    <div class="relative mt-1">
                      <select
                        class="select2-hidden-accessible"
                        id="selectProduct"
                        name="selectProduct"
                        data-select2-id="select2-data-selectProduct"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="select2-data-6-r6k4">
                          Select Product
                        </option>
                        <option value="">Product 1</option>
                        <option value="">Product 2</option>
                        <option value="">Product 3</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-5-nti0"
                        style={{ width: "502px" }}
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-selectProduct-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-selectProduct-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Select Product"
                            >
                              Select Product
                            </span>
                            <span
                              class="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>

                      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          class="w-5 h-5 text-gray-500"
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
                    <label for="">
                      Select Image
                      <span>
                        (Image ratio should be 16:6. PNG, JPG, or JPEG up to
                        1MB)
                      </span>
                    </label>
                    <div class="mt-1.5">
                      <button
                        type="button"
                        class="btn btn-white"
                        data-toggle="modal"
                        data-target="#selectFilesModal"
                        onClick={() => {
                          setIsOpenPopupModal((prev) => ({
                            ...prev,
                            startSelectFilesAndMedia: true, // Open Select Files Modal
                          }));

                          // Ensure Select Files modal is above Add Main Banner
                          setTimeout(() => {
                            document.getElementById(
                              "selectFilesModal"
                            ).style.zIndex = "1060";
                          }, 100);
                        }}
                      >
                        <svg
                          class="w-5 h-5 mr-2 -ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        Select Files
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <div class="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  class="btn btn-light"
                  data-dismiss="modal"
                  aria-label="Close Modal"
                  onClick={() => setIsOpenPopupModal(false)}
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Add Banner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
