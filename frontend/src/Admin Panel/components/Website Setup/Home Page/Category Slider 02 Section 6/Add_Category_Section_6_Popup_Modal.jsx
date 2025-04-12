import React, { useEffect } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";
import { useAllMediaContext } from "../../../../context/All_Media_Context";
import { getFilePreview } from "../../../../utils/fileUploadUtils";

export default function Add_Category_Section_6_Popup_Modal() {
  const { isOpenPopupModal, setIsOpenPopupModal } = useAdminGlobalContext();

  const { mainCategory, subCategory, products } = useHeaderContext();

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
      setFormData((prev) => ({
        ...prev,
        home_page_image: selectedMainBanner1,
      }));
    }
  }, [selectedMainBanner1, setFormData]);

  console.log("add banner file", mainBannerSlider1);

  // useSelect2AndList();

  return (
    <>
      {/* [HOME PAGE SECTION 6] Horizontal Banners - 3 Items IN SECTION 6  */}

      <div
        className={`modal ${
          isOpenPopupModal.category_Slider_02 ? "active" : ""
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
              <form onSubmit={handleSubmit}>
                <div class="space-y-4">
                  {/* LAYOUT NUMBER */}
                  <div className="hidden">
                    <label>Layout Number</label>
                    <input
                      type="text"
                      name="layoutNumber"
                      value={formData.layoutNumber === 6}
                    />
                  </div>

                  {/* CATEGORY TITLE */}
                  <div>
                    <label for=""> Category Title </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="home_page_section_title"
                        value={formData.home_page_section_title || ""}
                        onChange={handleInputChange}
                        placeholder="Enter banner title"
                      />
                    </div>
                  </div>

                  {/* MAIN CATEGORY */}

                  {/* MAIN CATEGORY */}
                  <div>
                    <label htmlFor="selectMainCategory">
                      Select Main Category
                    </label>
                    <div className="relative mt-1">
                      <select
                        className=""
                        id="selectMainCategory"
                        name="home_page_main_category"
                        value={
                          formData.home_page_main_category?._id ||
                          formData.home_page_main_category ||
                          ""
                        }
                        onChange={handleInputChange}
                      >
                        <option value="">Select Main Category</option>
                        {mainCategory.map((mainCategory) => (
                          <option
                            key={mainCategory._id}
                            value={mainCategory._id}
                          >
                            {mainCategory.main_category_title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* SUB CATEGORY */}
                  <div>
                    <label htmlFor="selectSubCategory">
                      Select Sub Category
                    </label>
                    <div className="relative mt-1">
                      <select
                        className=""
                        id="selectSubCategory"
                        name="home_page_sub_category"
                        value={
                          formData.home_page_sub_category?._id ||
                          formData.home_page_sub_category ||
                          ""
                        }
                        onChange={handleInputChange}
                      >
                        <option value="">Select Sub Category</option>
                        {subCategory.map((subCategory) => (
                          <option key={subCategory._id} value={subCategory._id}>
                            {subCategory.sub_category_title}
                          </option>
                        ))}
                      </select>
                    </div>
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
                </div>
                <div className="space-y-4">
                  <div className="modal-footer">
                    <div className="flex items-center justify-end space-x-4">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-dismiss="modal"
                        aria-label="Close Modal"
                        onClick={() =>
                          setIsOpenPopupModal((prev) => ({
                            ...prev,
                            category_Slider_02: false,
                          }))
                        }
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        {isEditMode ? "Update Banner" : "Add Banner"}
                      </button>
                    </div>
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
