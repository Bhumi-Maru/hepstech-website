import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";

import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../context/All_Media_Context";
import { getFilePreview } from "../../../utils/fileUploadUtils";
import { usePageContext } from "../../../context/Store_Setting_Page";

export default function Create_New_Page_Popup_Modal() {
  const { setIsOpenPopupModal, isOpenPopupModal } = useAdminGlobalContext();
  const {
    isBannerImageVisible,
    setIsBannerImageVisible,
    setSelectedBannerImage,
    mediaItems,
    selectedBannerImage,
  } = useAllMediaContext();

  const {
    createPage,
    fetchPageContent,
    currentPage,
    setCurrentPage,
    updatePage,
  } = usePageContext();

  const [pageTitle, setPageTitle] = useState("");
  const [pageContent, setPageContent] = useState("");
  const [pageStatus, setPageStatus] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Initialize form when currentPage changes (for editing)
  useEffect(() => {
    if (currentPage) {
      setIsEditing(true);
      setPageTitle(currentPage.pageTitle);
      setPageContent(currentPage.pageContent);
      setPageStatus(currentPage.page_status === "Published");
      setSelectedBannerImage(currentPage.pages_add_banner_image?._id || null);
      setIsBannerImageVisible(
        currentPage.pages_add_banner_image_status === "active"
      );
    } else {
      resetForm();
    }
  }, [currentPage]);

  const handleSubmit = async () => {
    const pageData = {
      pageTitle,
      pages_add_banner_image: selectedBannerImage,
      pages_add_banner_image_status: isBannerImageVisible
        ? "active"
        : "deactive",
      pageContent,
      page_status: pageStatus ? "Published" : "Unpublished",
    };

    try {
      if (isEditing) {
        await updatePage(currentPage._id, pageData);
      } else {
        await createPage(pageData);
      }
      // setIsEditingId(null); // Close the modal
      setIsOpenPopupModal(false);
      resetForm();
      fetchPageContent();
    } catch (error) {
      console.error("Error submitting page:", error);
    }
  };

  // find banner image id and its preview
  console.log("media", mediaItems);
  const bannerImageFile = mediaItems.find((item) => {
    console.log("item is........", item);
    return item._id === selectedBannerImage;
  });

  console.log("bannnnner", bannerImageFile);

  const resetForm = () => {
    setPageTitle("");
    setPageContent("");
    setPageStatus(false);
    setSelectedBannerImage(null);
    setIsBannerImageVisible(false);
    setIsEditing(false);
    setCurrentPage(null);
    // setIsEditingId(null);
  };
  return (
    <>
      <style>
        {` .ql-tooltip.ql-editing {
      left: 0px !important;
    }`}
      </style>
      {/* CREATE A NEW PAGE POPUP MODAL */}
      {isOpenPopupModal.createNewPage && (
        <>
          <div
            className="modal active"
            id="createPageModal"
            tabindex="-1"
            role="dialog"
            aria-hidden="false"
          >
            <div className="modal-overlay" tabindex="-1"></div>
            <div className="modal-dialog modal-dialog-centered sm:max-w-2xl">
              <div className="modal-content" role="document">
                <div className="modal-header">
                  <h5 className="mr-12 text-lg font-bold truncate">
                    {isEditing ? "Edit Page" : "Create New Page"}
                  </h5>

                  {/* <!-- close button --> */}
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setIsOpenPopupModal(false);
                      resetForm();
                    }}
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
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <div className="space-y-4">
                      {/* PAGE TITLE */}
                      <div>
                        <label for=""> Enter Page Title </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="pageTitle"
                            id="pageTitle"
                            placeholder=""
                            className="pageTitle"
                            value={pageTitle}
                            onChange={(e) => setPageTitle(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* ADD BANNER IMAGE UPLOAD */}
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
                          <label htmlFor="categoryBannerImage">
                            Banner Image
                          </label>
                          <div>
                            <label for="">
                              {/* Select Image */}
                              {/* <span>
                                              (Image ratio should be 16:6. PNG, JPG, or JPEG up to
                                              1MB)
                                            </span> */}
                              {/* <p>Selected File : {selectedBannerImage || "None"}</p> */}
                            </label>
                            <div className="flex" style={{ gap: "10px" }}>
                              <div className="mt-1.5">
                                <button
                                  type="button"
                                  className="btn btn-white"
                                  data-toggle="modal"
                                  data-target="#selectFilesModal"
                                  onClick={() => {
                                    setIsOpenPopupModal((prev) => ({
                                      ...prev,
                                      startSelectFilesAndMedia: true,
                                    }));
                                    setSelectedBannerImage(null); // Ensure previous selection is cleared
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

                              <div className="mt-1">
                                {/* Show Preview for Banner Image */}
                                {getFilePreview(bannerImageFile)}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* PAGE CONTENT */}
                      <div>
                        <label>Page Content</label>
                        <div className="mt-1">
                          <ReactQuill
                            theme="snow"
                            value={pageContent}
                            onChange={setPageContent}
                            placeholder="Write content here..."
                            className="bg-white"
                          />
                        </div>
                      </div>

                      {/* page status */}
                      <div>
                        <label for="toggleSwitch">Status</label>
                        <div className="mt-1 toggle-switch">
                          <input
                            type="checkbox"
                            id="toggleSwitch"
                            role="checkbox"
                            tabindex="0"
                            checked={pageStatus}
                            onChange={(e) => setPageStatus(e.target.checked)}
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
                      onClick={() => {
                        setIsOpenPopupModal(false);
                      }}
                    >
                      Discard
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      {isEditing ? "Edit Page" : "Add Page"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
