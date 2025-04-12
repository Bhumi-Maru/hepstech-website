import React, { useEffect } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useAllMediaContext } from "../../../../context/All_Media_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";
import { getFilePreview } from "../../../../utils/fileUploadUtils";

export default function Edit_Best_Of_Services_popup_modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();
  const {
    isEditMode,
    handleInputChange,
    handleSubmit,
    formData,
    setFormData,
    selectedMainBanner1,
  } = useHomePageContext();

  const { mediaItems } = useAllMediaContext();

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
  return (
    <>
      {/* EDIT BEST OF SERVICES POPUP MODAL [SECTION 24] */}
      <div
        // class="modal active"
        className={`modal ${
          isOpenPopupModal.best_of_services_section_24 ? "active" : ""
        }`}
        id="addBastofservicesModal"
        tabindex="-1"
      >
        <div class="modal-overlay" tabindex="-1"></div>
        <div class="modal-dialog modal-dialog-centered sm:max-w-lg">
          <div class="modal-content" role="document">
            <div class="modal-header">
              <h5 class="mr-12 text-lg font-bold truncate">
                Edit Bast Of Services
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
            <div id="bastofservisModel">
              <form onSubmit={handleSubmit}>
                {/* LAYOUT NUMBER */}
                <div className="hidden">
                  <label>Layout Number</label>
                  <input
                    type="text"
                    name="layoutNumber"
                    value={formData.layoutNumber === 24}
                  />
                </div>

                <div class="modal-body">
                  <div class="space-y-4">
                    {/* TITLE */}
                    <div>
                      <label for="">Title</label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="home_page_section_title"
                          id="title"
                          placeholder=" "
                          class=""
                          value={formData.home_page_section_title || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    {/* SELECT FILES */}
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
                    {/* SUB TITLE */}
                    <div>
                      <label for="">SubTitle</label>
                      <div class="mt-1">
                        <textarea
                          name="home_page_testimonial"
                          id="home_page_testimonial"
                          placeholder=""
                          rows="4"
                          class="resize-y"
                          value={formData.home_page_testimonial || ""}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <div class="flex items-center justify-end space-x-4">
                    <button type="submit" name="submit" class="btn btn-primary">
                      {isEditMode && "Update"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
