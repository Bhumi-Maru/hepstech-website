import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import axios from "axios"; // Make sure to install axios
import { useAllMediaContext } from "../../../context/All_Media_Context";

export default function Main_Category_Add_Modal() {
  const { setIsOpenPopupModal } = useAdminGlobalContext();
  const [mainCategoryTitle, setMainCategoryTitle] = useState("");
  const [mainCategoryStatus, setMainCategoryStatus] = useState(false);
  const {
    setSelectedMainImage,
    setSelectedBannerImage,
    selectedBannerImage,
    selectedMainImage,
    selectedFile,
    isBannerImageVisible,
    setIsBannerImageVisible,
  } = useAllMediaContext();

  useEffect(() => {
    if (selectedFile) {
      if (!isBannerImageVisible) {
        setSelectedMainImage(selectedMainImage);
        // setMainImage(selectedFile);
      } else {
        setSelectedBannerImage(selectedBannerImage);
        // setBannerImage(selectedFile);
      }
    }
  }, [selectedFile, isBannerImageVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const data = {
      main_category_title: mainCategoryTitle,
      main_category_status: mainCategoryStatus ? "published" : "draft",
      add_banner_image_status: isBannerImageVisible ? "active" : "deactive",
      main_image: selectedMainImage, // ID of the selected main image
      add_banner_image: selectedBannerImage || null, // If no banner image selected, pass null
    };

    console.log("data", data);

    try {
      // Send POST request to your backend
      const response = await axios.post(
        "http://localhost:7000/api/main-category/add",
        data
      );

      if (response.data.message === "Main category added successfully") {
        // Handle success (e.g., close the modal, show success message)
        setMainCategoryTitle("");
        setMainCategoryStatus(false);
        setSelectedMainImage(null);
        setSelectedBannerImage(null);
        setIsBannerImageVisible(false);
        setIsOpenPopupModal(false);
      } else {
        alert(`Error: ${response.data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding main category:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message || "Unknown error"}`);
      } else if (error.request) {
        alert("No response from backend. Please check your network.");
      } else {
        alert("Error adding main category. Please try again.");
      }
    }
  };

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
              <form onSubmit={handleSubmit}>
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
                        value={mainCategoryTitle}
                        onChange={(e) => setMainCategoryTitle(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Main Image Upload */}
                  <div>
                    <label htmlFor="categoryMainImage">Main Image</label>
                    <div>
                      <label for="">
                        Select Image
                        <span>
                          (Image ratio should be 16:6. PNG, JPG, or JPEG up to
                          1MB)
                        </span>
                        {/* <p>Selected File : {selectedMainImage || "None"}</p> */}
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
                              startSelectFilesAndMedia: true,
                            }));
                            setSelectedMainImage(null); // Ensure previous selection is cleared
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
                          {/* <p>Selected File : {selectedBannerImage || "None"}</p> */}
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
                        checked={mainCategoryStatus}
                        onChange={(e) =>
                          setMainCategoryStatus(e.target.checked)
                        }
                      />
                      <label htmlFor="toggleSwitch"></label>
                    </div>
                  </div>
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
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* END ADD MAIN CATEGORY POPUP MODAL */}
    </>
  );
}
