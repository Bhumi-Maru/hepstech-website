import React from "react";
import Select_Files from "./Select_Files";
import Upload_New from "./Upload_New";
import { handleFileUpload } from "../../utils/fileUploadUtils";
import { useAdminGlobalContext } from "../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../context/All_Media_Context";

export default function Start_Select_Files_And_Media_Modal({
  setMainImage,
  isBannerImageVisible,
  setBannerImage,
}) {
  const { setIsOpenPopupModal, isOpenPopupModal } = useAdminGlobalContext();
  const {
    selectedFile,
    setMediaItems,
    setPreviewUrl,
    selectedTab,
    setSelectedTab,
  } = useAllMediaContext();

  // console.log("selected file", selectedFile);

  return (
    <>
      <div
        className={`modal ${
          isOpenPopupModal.startSelectFilesAndMedia ? "active" : ""
        }`}
        id="selectFilesModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabIndex="-1"></div>
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered sm:max-w-6xl">
          <div className="modal-content" role="document">
            <div className="modal-header !pb-0">
              <ul
                className="flex items-center space-x-6 tabs"
                id="myTab"
                role="tablist"
              >
                <li className="tab-item" role="presentation">
                  <button
                    type="button"
                    id="home-tab"
                    className={`tab-link ${
                      selectedTab === "select" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("select")}
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Select Files
                  </button>
                </li>
                <li className="tab-item" role="presentation">
                  <button
                    type="button"
                    id="profile-tab"
                    className={`tab-link ${
                      selectedTab === "upload" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("upload")}
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Upload
                  </button>
                </li>
              </ul>
              <button
                type="button"
                className="!-mt-5 btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() =>
                  setIsOpenPopupModal((prev) => ({
                    ...prev,
                    startSelectFilesAndMedia: false,
                  }))
                }
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
              <div className="tab-content" id="myTabContent">
                {selectedTab === "select" ? <Select_Files /> : <Upload_New />}
              </div>
            </div>
            <div className="modal-footer">
              <div className="sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <div className="flex items-center space-x-3">
                  <p className="mr-3 font-medium">
                    {selectedFile ? `${selectedFile}` : "0 files selected"}
                  </p>
                  <a
                    href="#"
                    className="text-sm font-semibold text-skin-primary hover:underline"
                  >
                    Clear Selection
                  </a>
                </div>
                <div className="flex items-center justify-end mt-5 space-x-4">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-dismiss="modal"
                    aria-label="Close Modal"
                    onClick={() =>
                      setIsOpenPopupModal((prev) => ({
                        ...prev,
                        startSelectFilesAndMedia: false,
                      }))
                    }
                  >
                    Cancel
                  </button>
                  {selectedTab === "upload" ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        handleFileUpload(
                          selectedFile,
                          setMediaItems,
                          setIsOpenPopupModal,
                          setPreviewUrl,
                          setSelectedTab,
                          isOpenPopupModal
                        )
                      }
                      disabled={!selectedFile}
                    >
                      Add Files
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        if (selectedFile) {
                          setMainImage(selectedFile); // Assign to main image
                          if (isBannerImageVisible) {
                            setBannerImage(selectedFile); // Assign to banner if visible
                          }
                        }
                        setIsOpenPopupModal((prev) => ({
                          ...prev,
                          startSelectFilesAndMedia: false,
                        }));
                      }}
                      disabled={!selectedFile}
                    >
                      Select Files
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
