import React from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";

export default function Home_Page_Section_7() {
  const { toggleStates, handleToggle, toggleModal, setIsOpenPopupModal } =
    useAdminGlobalContext();
  const { mainCategory, subCategory, products } = useHeaderContext();
  const {
    homePage,
    fetchHomePage,
    handleDelete,
    setCurrentBanner,
    isEditMode,
    setIsEditMode,
    setFormData,
    // handleEdit,
    formData,
    handleInputChange,
    saveSectionTitle,
    setSelectedMainBanner1,
  } = useHomePageContext();

  // Filter banners for layoutNumber 6
  const sectionBanners = homePage.filter((banner) => {
    return banner.home_page_layout_number?.layoutNumber === 7;
  });

  const handleAddNew = () => {
    setCurrentBanner(null);
    setIsEditMode(false);
    setFormData({
      layoutNumber: 7,
      home_page_section_title: "",
      home_page_main_category: "",
      home_page_sub_category: "",
      home_page_image: null,
    });
    setSelectedMainBanner1(null);
  };

  const handleEdit = (banner) => {
    setCurrentBanner(banner);
    setFormData({
      layoutNumber: banner.home_page_layout_number?.layoutNumber || 7,
      home_page_section_title: banner.home_page_section_title || "",
      home_page_main_category: banner.home_page_main_category?._id || "",
      home_page_sub_category: banner.home_page_sub_category?._id || "",
      home_page_layout_type: banner.home_page_layout_type || null,
    });
    setIsEditMode(true);
    if (banner.home_page_image) {
      setSelectedMainBanner1(banner.home_page_image._id);
    }
    setIsOpenPopupModal((prev) => ({
      ...prev,
      popular_Products_Slider_01: true,
    }));
  };

  return (
    <>
      {/* [HOME PAGE SECTION 7] Popular Products Slider 01  */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between">
          <div className="hidden">
            <label>Layout Number</label>
            <input
              type="text"
              name="layoutNumber"
              value={formData.layoutNumber === 7}
            />
          </div>
          <label
            for="popularProducts01Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Popular Products Slider 01 (Layout 7)
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="popularProducts01Status"
              role="checkbox"
              tabindex="0"
              checked={toggleStates.popular_Products_Slider_01}
              onChange={() => handleToggle("popular_Products_Slider_01")}
            />
            <label for="popularProducts01Status"></label>
          </div>
        </div>
        {toggleStates.popular_Products_Slider_01 && (
          <>
            <div className="mt-4" id="popularProducts01Content">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name="home_page_section_title"
                      value={formData.home_page_section_title || ""}
                      onChange={handleInputChange}
                      placeholder="Enter section title"
                    />
                  </div>
                  <div></div>
                </div>

                <div>
                  <label for="selectMainCategory">Select Main Category</label>
                  <div className="relative mt-1">
                    <select
                      className=""
                      id="selectMainCategory"
                      name="home_page_main_category"
                      value={formData.home_page_main_category || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Main Category</option>
                      {mainCategory.map((mainCategory) => (
                        <option key={mainCategory._id} value={mainCategory._id}>
                          {mainCategory.main_category_title}
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="selectSubCategory">Select Sub Category</label>
                  <div className="relative mt-1">
                    <select
                      className=""
                      id="selectSubCategory"
                      name="home_page_sub_category"
                      value={formData.home_page_sub_category || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Sub Category</option>
                      {subCategory.map((subCategory) => (
                        <option key={subCategory._id} value={subCategory._id}>
                          {subCategory.sub_category_title}
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label for=""> Select Layout Type </label>
                  <div className="mt-1 form-input">
                    <select
                      name="home_page_layout_type"
                      value={formData.home_page_layout_type || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Layout</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  className="w-full btn btn-white sm:w-auto"
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                  onClick={() => toggleModal("popular_Products_Slider_01")}
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  Add Products
                </button>

                <div className="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button type="button" className="btn btn-dark-light">
                    Discard
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddNew}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
