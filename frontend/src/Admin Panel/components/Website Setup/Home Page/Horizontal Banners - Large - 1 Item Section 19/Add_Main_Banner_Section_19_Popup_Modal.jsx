import React, { useState, useEffect } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
// import useSelect2AndList from "../../../../hooks/useSelect2AndList";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";
import { getFilePreview } from "../../../../utils/fileUploadUtils";
import { useAllMediaContext } from "../../../../context/All_Media_Context";

export default function Add_Main_Banner_Section_19_Popup_Modal() {
  const { setIsOpenPopupModal, isOpenPopupModal } = useAdminGlobalContext();
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
      // Update formData with the selected image
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
      {/* [HOME PAGE SECTION 13] Horizontal Banners - Large - 1 Item IN SECTION 13  */}
      <div
        className={`modal ${
          isOpenPopupModal.horizontal_Banners_Large_1_Items_Section_19
            ? "active"
            : ""
        }`}
        id="addMainBannerModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-overlay" tabindex="-1"></div>
        <div className="modal-dialog modal-dialog-centered sm:max-w-xl">
          <div
            className="modal-content max-w-full overflow-x-hidden"
            role="document"
          >
            <div className="modal-header">
              <h5 className="mr-12 text-lg font-medium truncate">
                Add Main Banner
              </h5>

              {/* <!-- close button --> */}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* LAYOUT NUMBER */}
                  <div className="hidden">
                    <label>Layout Number</label>
                    <input
                      type="text"
                      name="layoutNumber"
                      value={formData.layoutNumber === 1}
                    />
                  </div>
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
                        value={formData.home_page_main_category}
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
                        value={formData.home_page_sub_category}
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
                  {/* PRODUCTS */}
                  <div>
                    {" "}
                    <label>Product</label>{" "}
                    <select
                      name="home_page_products"
                      value={formData.home_page_products}
                      onChange={handleInputChange}
                      className="w-full mt-1"
                    >
                      {" "}
                      <option value="">Select Product</option>{" "}
                      {products.map((product) => (
                        <option key={product._id} value={product._id}>
                          {" "}
                          {product.productTitle}{" "}
                        </option>
                      ))}{" "}
                    </select>{" "}
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

                  {/* Status Toggle */}
                  <div>
                    <label htmlFor="toggleSwitch">Status</label>
                    <div className="mt-1 toggle-switch">
                      <input
                        type="checkbox"
                        id="toggleSwitch"
                        role="checkbox"
                        tabIndex="0"
                        checked={formData.home_page_status === "published"}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            home_page_status: e.target.checked
                              ? "published"
                              : "unpublished",
                          }))
                        }
                      />
                      <label htmlFor="toggleSwitch"></label>
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
                        onClick={() => setIsOpenPopupModal(false)}
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
