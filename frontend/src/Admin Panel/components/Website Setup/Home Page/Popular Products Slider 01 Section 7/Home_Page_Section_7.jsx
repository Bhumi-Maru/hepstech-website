import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Home_Page_Section_7() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  const { mainCategory, subCategory } = useHeaderContext();
  const {
    saveSectionTitle,
    setSection7MainCategoryId,
    fetchProductsByMainCategory,
  } = useHomePageContext();

  const [formData7, setFormData7] = useState({
    layoutNumber: "7",
    // home_page_section_title: "",
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_layout_type: "",
    sectionTitle: localStorage.getItem("sectionTitle-7") || "", // Initialize from localStorage
  });

  const handleInputChange7 = (e) => {
    const { name, value } = e.target;
    setFormData7((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save to localStorage whenever sectionTitle changes
  useEffect(() => {
    if (formData7.sectionTitle) {
      localStorage.setItem("sectionTitle-7", formData7.sectionTitle);
    }
  }, [formData7.sectionTitle]);

  const handleSave7 = async () => {
    try {
      if (formData7.sectionTitle) {
        await saveSectionTitle(formData7.sectionTitle, 7);
        localStorage.setItem("sectionTitle-7", formData7.sectionTitle);
      }

      const response = await fetch("http://localhost:7000/api/homepage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData7,
          layoutNumber: "7",
        }),
      });

      const result = await response.json();

      // if (result.newHomePage?.home_page_main_category) {
      //   // Store the main category ID for section 7
      //   setSection7MainCategoryId(result.newHomePage.home_page_main_category);

      //   // Fetch products for this category
      //   await fetchProductsByMainCategory(
      //     result.newHomePage.home_page_main_category,
      //     7
      //   );
      // }

      setFormData7((prev) => ({
        ...prev,
        home_page_main_category: "",
        home_page_sub_category: "",
        home_page_layout_type: "",
      }));
    } catch (error) {
      console.error("Error saving layout 7:", error);
      alert("Failed to save layout 7.");
    }
  };

  const handleDiscard = () => {
    setFormData7({
      layoutNumber: "7",
      // home_page_section_title: "",
      home_page_main_category: "",
      home_page_sub_category: "",
      home_page_layout_type: "",
    });
  };

  return (
    <>
      {/* [HOME PAGE SECTION 7] Popular Products Slider 01 */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between">
          <label
            htmlFor="popularProducts01Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Popular Products Slider 01 (Layout 7)
          </label>
          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="popularProducts01Status"
              role="checkbox"
              tabIndex="0"
              checked={toggleStates.popular_Products_Slider_01}
              onChange={() => handleToggle("popular_Products_Slider_01")}
            />
            <label htmlFor="popularProducts01Status"></label>
          </div>
        </div>

        {toggleStates.popular_Products_Slider_01 && (
          <>
            <div className="mt-4" id="popularProducts01Content">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label>Section Title</label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name="sectionTitle"
                      value={formData7.sectionTitle || ""}
                      onChange={handleInputChange7}
                      placeholder="Enter section title"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="selectMainCategory">
                    Select Main Category
                  </label>
                  <div className="relative mt-1">
                    <select
                      className=""
                      id="selectMainCategory"
                      name="home_page_main_category"
                      value={formData7.home_page_main_category || ""}
                      onChange={handleInputChange7}
                    >
                      <option value="">Select Main Category</option>
                      {mainCategory.map((mainCategory) => (
                        <option key={mainCategory._id} value={mainCategory._id}>
                          {mainCategory.main_category_title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="selectSubCategory">Select Sub Category</label>
                  <div className="relative mt-1">
                    <select
                      className=""
                      id="selectSubCategory"
                      name="home_page_sub_category"
                      value={formData7.home_page_sub_category || ""}
                      onChange={handleInputChange7}
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

                <div>
                  <label>Select Layout Type</label>
                  <div className="mt-1 form-input">
                    <select
                      name="home_page_layout_type"
                      value={formData7.home_page_layout_type || ""}
                      onChange={handleInputChange7}
                    >
                      <option value="">Select Layout</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:justify-between sm:space-x-4">
                <button
                  type="button"
                  className="w-full btn btn-white sm:w-auto"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Products
                </button>

                <div className="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
                  <button
                    type="button"
                    className="btn btn-dark-light"
                    onClick={handleDiscard}
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSave7}
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
