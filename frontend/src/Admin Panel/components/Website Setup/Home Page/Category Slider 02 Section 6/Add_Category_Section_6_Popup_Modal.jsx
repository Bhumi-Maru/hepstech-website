import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";

export default function Add_Category_Section_6_Popup_Modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();

  return (
    <>
      {/* [HOME PAGE SECTION 6] Horizontal Banners - 3 Items IN SECTION 6  */}

      <div
        className={`modal ${
          isOpenPopupModal.horizontal_Banners_3_Items ? "active" : ""
        }`}
        id="addCategoryModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div class="modal-overlay" tabindex="-1"></div>
        <div class="modal-dialog modal-dialog-centered sm:max-w-xl">
          <div class="modal-content" role="document">
            <div class="modal-header">
              <h5 class="mr-12 text-lg font-medium truncate">Add Category</h5>

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
                    <label for=""> Category Title </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter category title"
                        class=""
                      />
                    </div>
                  </div>

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
                    <label for="">
                      Select Image
                      <span>
                        (Image ratio should be 1:1 (Square). PNG, JPG, or JPEG
                        up to 500kb)
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
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
