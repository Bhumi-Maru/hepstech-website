import React, { useEffect, useState } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";
import { useHomePageContext } from "../../../../context/HomepageContext";

export default function Home_Page_Section__20() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  const { mainCategory, subCategory } = useHeaderContext();
  const { saveSectionTitle } = useHomePageContext();

  const [formData20, setFormData20] = useState({
    layoutNumber: "20",
    // home_page_section_title: "",
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_layout_type: "",
    sectionTitle: localStorage.getItem("sectionTitle-20") || "", // Initialize from localStorage
  });

  const handleInputChange20 = (e) => {
    const { name, value } = e.target;
    setFormData20((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save to localStorage whenever sectionTitle changes
  useEffect(() => {
    if (formData20.sectionTitle) {
      localStorage.setItem("sectionTitle-20", formData20.sectionTitle);
    }
  }, [formData20.sectionTitle]);

  const handleSave20 = async () => {
    try {
      // First save the section title if it exists
      if (formData20.sectionTitle) {
        await saveSectionTitle(formData20.sectionTitle, 20);
        localStorage.setItem("sectionTitle-20", formData20.sectionTitle); // Ensure it's saved
      }

      // Example API request (replace URL with your actual API endpoint)
      const response = await fetch("http://localhost:7000/api/homepage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData20),
      });

      const result = await response.json();
      console.log("Saved successfully:", result);

      // Reset form but keep the sectionTitle
      setFormData20((prev) => ({
        ...prev,
        layoutNumber: "20",
        home_page_main_category: "",
        home_page_sub_category: "",
        home_page_layout_type: "",
        // sectionTitle is not reset here, so it keeps its value
      }));
    } catch (error) {
      console.error("Error saving layout 20 data:", error);
      alert("Failed to save layout 20.");
    }
  };

  const handleDiscard = () => {
    setFormData20({
      layoutNumber: "20",
      home_page_main_category: "",
      home_page_sub_category: "",
      home_page_layout_type: "",
      sectionTitle: localStorage.getItem("sectionTitle-20") || "",
    });
  };

  return (
    <>
      {/* [HOME PAGE SECTION 20] Best Selling Products Slider 04  */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            for="bestSellingProducts04Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Best Selling Products Slider 04 (Layout 20)
            {/* &nbsp;
            <span className="badge-success">(Layout 20)</span> */}
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="bestSellingProducts04Status"
              role="checkbox"
              tabindex="0"
              checked={toggleStates.best_Selling_Products_Slider_04_Section_20}
              onChange={() =>
                handleToggle("best_Selling_Products_Slider_04_Section_20")
              }
            />
            <label for="bestSellingProducts04Status"></label>
          </div>
        </div>

        {toggleStates.best_Selling_Products_Slider_04_Section_20 && (
          <>
            <div
              className="mt-4"
              id="bestSellingProducts04Content"
              style={{ display: "block" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name="sectionTitle"
                      value={formData20.sectionTitle || ""}
                      onChange={handleInputChange20}
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
                      id="selectMainCategory"
                      name="home_page_main_category"
                      value={formData20.home_page_main_category || ""}
                      onChange={handleInputChange20}
                    >
                      <option value="">Select Main Category</option>
                      {mainCategory.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.main_category_title}
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
                      id="selectSubCategory"
                      name="home_page_sub_category"
                      value={formData20.home_page_sub_category || ""}
                      onChange={handleInputChange20}
                    >
                      <option value="">Select Sub Category</option>
                      {subCategory.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.sub_category_title}
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
                      value={formData20.home_page_layout_type || ""}
                      onChange={handleInputChange20}
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
                  onClick={() =>
                    toggleModal("best_Selling_Products_Slider_04_Section_20")
                  }
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
                    onClick={handleSave20}
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
