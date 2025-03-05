import React, { useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Main_Category_Add_Modal() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const [isBannerImageVisible, setIsBannerImageVisible] = useState(false);

  return (
    <>
      {/* START ADD MAIN CATEGORY POPUP MODAL */}
      <div
        className="modal active"
        id="createMainCategoryModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div className="modal-content" role="document">
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-bold truncate">
                Create Main Category
              </h5>

              {/* Close button */}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="space-y-4">
                  {/* Main Category Title */}
                  <div>
                    <label htmlFor="mainCategoryTitle">
                      Main Category Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="mainCategoryTitle"
                        placeholder="Enter main category title"
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Main Image Upload */}
                  <div>
                    <label htmlFor="categoryMainImage">Main Image</label>
                    {/* <div className="mt-1">
                      <div className="file-input">
                        <input type="file" id="categoryMainImage" />
                        <label className="label">No file selected</label>
                        <span className="button">Choose</span>
                      </div>
                    </div> */}
                    <div>
                      <label for="">
                        Select Image
                        <span>
                          (Image ratio should be 16:6. PNG, JPG, or JPEG up to
                          1MB)
                        </span>
                      </label>
                      <div className="mt-1.5">
                        <button
                          type="button"
                          className="btn btn-white"
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
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          Select Files
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add Banner Image Checkbox */}
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="bannerImageStatus"
                        checked={isBannerImageVisible}
                        onChange={(e) =>
                          setIsBannerImageVisible(e.target.checked)
                        }
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="bannerImageStatus">
                        Add Banner Image
                      </label>
                    </div>
                  </div>

                  {/* Banner Image Upload - Shown When Checkbox is Checked */}
                  {isBannerImageVisible && (
                    <div className="mt-4">
                      <label htmlFor="categoryBannerImage">Banner Image</label>
                      <div>
                        <label for="">
                          Select Image
                          <span>
                            (Image ratio should be 16:6. PNG, JPG, or JPEG up to
                            1MB)
                          </span>
                        </label>
                        <div className="mt-1.5">
                          <button
                            type="button"
                            className="btn btn-white"
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
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            Select Files
                          </button>
                        </div>
                      </div>
                      {/* <div className="mt-1">
                        <div className="file-input">
                          <input type="file" id="categoryBannerImage" />
                          <label className="label">No file selected</label>
                          <span className="button">Choose</span>
                        </div>
                      </div> */}
                    </div>
                  )}

                  {/* Status Toggle */}
                  <div>
                    <label htmlFor="toggleSwitch">Status</label>
                    <div className="mt-1 toggle-switch">
                      <input
                        type="checkbox"
                        id="toggleSwitch"
                        role="checkbox"
                        tabIndex="0"
                      />
                      <label htmlFor="toggleSwitch"></label>
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

      {/* END ADD MAIN CATEGORY POPUP MODAL */}
    </>
  );
}
