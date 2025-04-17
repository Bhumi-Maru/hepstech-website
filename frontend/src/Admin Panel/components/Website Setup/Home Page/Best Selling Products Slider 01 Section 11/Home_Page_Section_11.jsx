import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Home_Page_Section_11() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  const { mainCategory, subCategory, products } = useHeaderContext();
  const { saveSectionTitle } = useHomePageContext();
  const [formData11, setFormData11] = useState({
    layoutNumber: "11",
    // home_page_section_title: "",
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_layout_type: "",
    sectionTitle: localStorage.getItem("sectionTitle-11") || "", // Initialize from localStorage
  });

  const handleInputChange11 = (e) => {
    const { name, value } = e.target;
    setFormData11((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save to localStorage whenever sectionTitle changes
  useEffect(() => {
    if (formData11.sectionTitle) {
      localStorage.setItem("sectionTitle-11", formData11.sectionTitle);
    }
  }, [formData11.sectionTitle]);

  const handleSave11 = async () => {
    try {
      // First save the section title if it exists
      if (formData11.sectionTitle) {
        await saveSectionTitle(formData11.sectionTitle, 11);
        localStorage.setItem("sectionTitle-11", formData11.sectionTitle); // Ensure it's saved
      }

      // Example API request (replace URL with your actual API endpoint)
      const response = await fetch("http://localhost:7000/api/homepage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData11),
      });

      const result = await response.json();
      console.log("Saved successfully:", result);

      // Reset form but keep the sectionTitle
      setFormData11((prev) => ({
        ...prev,
        layoutNumber: "11",
        home_page_main_category: "",
        home_page_sub_category: "",
        home_page_layout_type: "",
        // sectionTitle is not reset here, so it keeps its value
      }));
    } catch (error) {
      console.error("Error saving layout 11 data:", error);
      alert("Failed to save layout 11.");
    }
  };

  const handleDiscard = () => {
    setFormData11({
      layoutNumber: "11",
      home_page_main_category: "",
      home_page_sub_category: "",
      home_page_layout_type: "",
      sectionTitle: localStorage.getItem("sectionTitle-11") || "",
    });
  };

  return (
    <>
      {/* [HOME PAGE SECTION 11] Best Selling Products Slider 01  */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            for="bestSellingProducts01Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Best Selling Products Slider 01 (Layout 11)
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="bestSellingProducts01Status"
              role="checkbox"
              tabindex="0"
              checked={toggleStates.best_Selling_Products_Slider_01}
              onChange={() => handleToggle("best_Selling_Products_Slider_01")}
            />
            <label for="bestSellingProducts01Status"></label>
          </div>
        </div>

        {toggleStates.best_Selling_Products_Slider_01 && (
          <>
            <div
              className="mt-4"
              id="bestSellingProducts01Content"
              style={{ display: "block" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name="sectionTitle"
                      value={formData11.sectionTitle || ""}
                      onChange={handleInputChange11}
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
                      value={formData11.home_page_main_category || ""}
                      onChange={handleInputChange11}
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
                      value={formData11.home_page_sub_category || ""}
                      onChange={handleInputChange11}
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
                      value={formData11.home_page_layout_type || ""}
                      onChange={handleInputChange11}
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
                  onClick={() => toggleModal("best_Selling_Products_Slider_01")}
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
                    // type="button"
                    className="btn btn-primary"
                    onClick={handleSave11}
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
