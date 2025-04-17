import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Home_Page_Section_9() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  const { mainCategory, subCategory, products } = useHeaderContext();
  const { saveSectionTitle } = useHomePageContext();
  const [formData9, setFormData9] = useState({
    layoutNumber: "9",
    // home_page_section_title: "",
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_layout_type: "",
    sectionTitle: localStorage.getItem("sectionTitle-9") || "", // Initialize from localStorage
  });

  const handleInputChange9 = (e) => {
    const { name, value } = e.target;
    setFormData9((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save to localStorage whenever sectionTitle changes
  useEffect(() => {
    if (formData9.sectionTitle) {
      localStorage.setItem("sectionTitle-9", formData9.sectionTitle);
    }
  }, [formData9.sectionTitle]);

  const handleSave9 = async () => {
    try {
      if (formData9.sectionTitle) {
        await saveSectionTitle(formData9.sectionTitle, 9);
        localStorage.setItem("sectionTitle-9", formData9.sectionTitle);
      }

      const response = await fetch("http://localhost:7000/api/homepage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData9,
          layoutNumber: "9",
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

      setFormData9((prev) => ({
        ...prev,
        home_page_main_category: "",
        home_page_sub_category: "",
        home_page_layout_type: "",
      }));
    } catch (error) {
      console.error("Error saving layout 9:", error);
      alert("Failed to save layout 9.");
    }
  };

  const handleDiscard = () => {
    setFormData9({
      layoutNumber: "9",
      home_page_main_category: "",
      home_page_sub_category: "",
      home_page_layout_type: "",
      sectionTitle: localStorage.getItem("sectionTitle-9") || "",
    });
  };

  return (
    <>
      {/* [HOME PAGE SECTION 9] Popular Products Slider 02  */}

      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            for="popularProducts02Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Popular Products Slider 02 (Layout 9)
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="popularProducts02Status"
              role="checkbox"
              tabindex="0"
              checked={toggleStates.Popular_Products_Slider_02}
              onChange={() => handleToggle("Popular_Products_Slider_02")}
            />
            <label for="popularProducts02Status"></label>
          </div>
        </div>

        {toggleStates.Popular_Products_Slider_02 && (
          <>
            <div className="mt-4" id="popularProducts02Content">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name="sectionTitle"
                      value={formData9.sectionTitle || ""}
                      onChange={handleInputChange9}
                      placeholder="Enter section title"
                    />
                  </div>
                  <div></div>
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
                      value={formData9.home_page_main_category || ""}
                      onChange={handleInputChange9}
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

                {/* SUB CATEGORY */}
                <div>
                  <label htmlFor="selectSubCategory">Select Sub Category</label>
                  <div className="relative mt-1">
                    <select
                      className=""
                      id="selectSubCategory"
                      name="home_page_sub_category"
                      value={formData9.home_page_sub_category || ""}
                      onChange={handleInputChange9}
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

                {/* LAYOUT TYPE [4,5,6] */}
                <div>
                  <label>Select Layout Type</label>
                  <div className="mt-1 form-input">
                    <select
                      name="home_page_layout_type"
                      value={formData9.home_page_layout_type || ""}
                      onChange={handleInputChange9}
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
                  data-toggle="modal"
                  data-target="#selectProductsModal"
                  onClick={() => toggleModal("Popular_Products_Slider_02")}
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
                  <button
                    type="button"
                    className="btn btn-dark-light"
                    onClick={handleDiscard}
                  >
                    Discard
                  </button>

                  <button
                    // type="submit"
                    className="btn btn-primary"
                    onClick={handleSave9}
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
