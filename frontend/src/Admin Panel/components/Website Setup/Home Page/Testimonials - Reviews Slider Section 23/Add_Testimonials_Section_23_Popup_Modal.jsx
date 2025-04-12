import React, { useState, useEffect } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";
import { getFilePreview } from "../../../../utils/fileUploadUtils";
import { useAllMediaContext } from "../../../../context/All_Media_Context";

export default function Add_Testimonials_Section_23_Popup_Modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  const { mediaItems } = useAllMediaContext();

  const {
    isEditMode,
    handleInputChange,
    handleSubmit,
    formData,
    setFormData,
    selectedMainBanner1,
  } = useHomePageContext();

  const mainBannerSlider1 = mediaItems.find((item) => {
    return item._id === selectedMainBanner1;
  });

  useEffect(() => {
    if (selectedMainBanner1) {
      // Update formData with the selected image
      setFormData((prev) => ({
        ...prev,
        home_page_image: selectedMainBanner1,
      }));
    }
  }, [selectedMainBanner1, setFormData]);

  console.log("add banner file", mainBannerSlider1);

  const closeModal = () => setIsOpenPopupModal(false);

  return (
    <div
      className={`modal ${
        isOpenPopupModal.testimonials_Reviews_Slider_Section_23 ? "active" : ""
      }`}
      id="addTestimonialModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="false"
    >
      <div className="modal-overlay" tabIndex="-1" onClick={closeModal}></div>
      <div className="modal-dialog modal-dialog-centered sm:max-w-lg">
        <div className="modal-content" role="document">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="mr-12 text-lg font-bold truncate">
              {isEditMode ? "Edit Testimonial" : "Add Testimonial"}
            </h5>
            <button type="button" className="btn-close" onClick={closeModal}>
              <span className="sr-only">Close</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* LAYOUT NUMBER */}
                <div className="hidden">
                  <label>Layout Number</label>
                  <input
                    type="text"
                    name="layoutNumber"
                    value={formData.layoutNumber === 23}
                  />
                </div>
                {/* Main Title */}
                <div>
                  <label htmlFor="home_page_section_title">
                    {/* Main Category Title */}
                    Customer Name
                  </label>
                  <input
                    type="text"
                    id="home_page_section_title"
                    name="home_page_section_title" // ✅ name added
                    placeholder="Enter main category title"
                    className="input"
                    value={formData.home_page_section_title || ""}
                    onChange={handleInputChange}
                  />
                </div>
                {/* select image */}
                <div className="flex" style={{ gap: "10px" }}>
                  <div className="mt-1.5">
                    <button
                      type="button"
                      className="btn btn-white"
                      onClick={() => {
                        setIsOpenPopupModal((prev) => ({
                          ...prev,
                          startSelectFilesAndMedia: true,
                          MainBannerSlider_Section1: true, // This is crucial
                        }));
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      {/* {selectedMainBanner1 ? "Change Image" : "Select Files"} */}
                      {/* {selectedMainBanner1 && "Select Files"} */}
                      Select Files
                    </button>
                  </div>

                  <div className="mt-1">
                    {/* Show Preview for Banner Image */}
                    {mainBannerSlider1 && getFilePreview(mainBannerSlider1)}
                  </div>
                </div>
                {/* Testimonial Text */}
                <div>
                  <label htmlFor="home_page_testimonial">Testimonial</label>
                  <textarea
                    id="home_page_testimonial"
                    name="home_page_testimonial" // ✅ name added
                    rows="4"
                    className="textarea resize-y"
                    placeholder="Enter testimonial..."
                    value={formData.home_page_testimonial || ""}
                    onChange={handleInputChange}
                  />
                </div>{" "}
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <div className="flex items-center justify-end space-x-4">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={closeModal}
                  >
                    Discard
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {isEditMode ? "Update" : "Add"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
