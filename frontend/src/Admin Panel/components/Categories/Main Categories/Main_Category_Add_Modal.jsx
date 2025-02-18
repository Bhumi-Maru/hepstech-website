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
                    <div className="mt-1">
                      <div className="file-input">
                        <input type="file" id="categoryMainImage" />
                        <label className="label">No file selected</label>
                        <span className="button">Choose</span>
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
                      <div className="mt-1">
                        <div className="file-input">
                          <input type="file" id="categoryBannerImage" />
                          <label className="label">No file selected</label>
                          <span className="button">Choose</span>
                        </div>
                      </div>
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
