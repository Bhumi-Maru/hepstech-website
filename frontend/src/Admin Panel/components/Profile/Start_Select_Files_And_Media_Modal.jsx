import React, { useState } from "react";
import Select_Files from "./Select_Files";
import Upload_New from "./Upload_New";
import { handleFileUpload } from "../../utils/fileUploadUtils";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../context/All_Media_Context";

export default function Start_Select_Files_And_Media_Modal() {
  const { setIsOpenPopupModal, isOpenPopupModal } = useAdminGlobalContext();
  const {
    selectedFile,
    setMediaItems,
    setPreviewUrl,
    selectedTab,
    setSelectedTab,
  } = useAllMediaContext();

  return (
    <>
      {/* START SELECT FILES AND MEDIA MODAL POPUP */}
      <div
        className={`modal ${
          isOpenPopupModal.startSelectFilesAndMedia ? "active" : ""
        }`}
        id="selectFilesModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div class="modal-overlay" tabindex="-1"></div>
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered sm:max-w-6xl">
          <div class="modal-content" role="document">
            <div class="modal-header !pb-0">
              <ul
                class="flex items-center space-x-6 tabs"
                id="myTab"
                role="tablist"
              >
                <li class="tab-item" role="presentation">
                  <button
                    type="button"
                    id="home-tab"
                    className={`tab-link ${
                      selectedTab === "select" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("select")}
                    data-toggle="tab"
                    data-target="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Select Files
                  </button>
                </li>

                <li class="tab-item" role="presentation">
                  <button
                    type="button"
                    id="profile-tab"
                    className={`tab-link ${
                      selectedTab === "upload" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("upload")}
                    data-toggle="tab"
                    data-target="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Upload
                  </button>
                </li>
              </ul>

              {/* <!-- close button --> */}
              <button
                type="button"
                class="!-mt-5 btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setIsOpenPopupModal((prev) => ({
                    ...prev,
                    startSelectFilesAndMedia: false, // Close only the Select Files modal
                  }));
                }}
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
              <div class="tab-content" id="myTabContent">
                {selectedTab === "select" ? <Select_Files /> : <Upload_New />}
              </div>
            </div>

            <div class="modal-footer">
              <div class="sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <div class="flex items-center space-x-3">
                  <p class="mr-3 font-medium">3 files selected</p>

                  <a
                    href="#"
                    title=""
                    class="text-sm font-semibold text-skin-primary hover:underline"
                  >
                    Clear Selection
                  </a>
                </div>

                <div class="flex items-center justify-end mt-5 space-x-4">
                  <button
                    type="button"
                    class="btn btn-light"
                    data-dismiss="modal"
                    aria-label="Close Modal"
                    onClick={() => {
                      setIsOpenPopupModal((prev) => ({
                        ...prev,
                        startSelectFilesAndMedia: false, // Close only the Select Files modal
                      }));
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() =>
                      handleFileUpload(
                        selectedFile,
                        setMediaItems,
                        setIsOpenPopupModal, // Pass this function properly
                        setPreviewUrl,
                        setSelectedTab,
                        isOpenPopupModal
                      )
                    }
                    disabled={!selectedFile}
                  >
                    Add Files
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
