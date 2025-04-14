import React, { useState } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";

export default function Home_Page_Section__14() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  const { mainCategory, subCategory, products } = useHeaderContext();

  const [formData14, setFormData14] = useState({
    layoutNumber: "14",
    home_page_section_title: "",
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_layout_type: "",
  });

  const handleInputChange14 = (e) => {
    const { name, value } = e.target;
    setFormData14((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave14 = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/homepage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData14),
      });

      const result = await response.json();
      console.log("Saved successfully:", result);

      setFormData14({
        layoutNumber: "14",
        home_page_section_title: "",
        home_page_main_category: "",
        home_page_sub_category: "",
        home_page_layout_type: "",
      });
    } catch (error) {
      console.error("Error saving layout 14 data:", error);
      alert("Failed to save layout 14.");
    }
  };

  const handleDiscard = () => {
    setFormData14({
      layoutNumber: "14",
      home_page_section_title: "",
      home_page_main_category: "",
      home_page_sub_category: "",
      home_page_layout_type: "",
    });
  };

  return (
    <>
      {/* [HOME PAGE SECTION 14] Best Selling Products Slider 02   */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            htmlFor="bestSellingProducts02Status"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Best Selling Products Slider 02 (Layout 14)
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="bestSellingProducts02Status"
              role="checkbox"
              tabIndex="0"
              checked={toggleStates.best_Selling_Products_Slider_02_Section_14}
              onChange={() =>
                handleToggle("best_Selling_Products_Slider_02_Section_14")
              }
            />
            <label htmlFor="bestSellingProducts02Status"></label>
          </div>
        </div>

        {toggleStates.best_Selling_Products_Slider_02_Section_14 && (
          <>
            <div className="mt-4" id="bestSellingProducts02Content">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label>Section Title</label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name="home_page_section_title"
                      value={formData14.home_page_section_title}
                      onChange={handleInputChange14}
                      placeholder="Enter section title"
                    />
                  </div>
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
                      value={formData14.home_page_main_category || ""}
                      onChange={handleInputChange14}
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
                      value={formData14.home_page_sub_category || ""}
                      onChange={handleInputChange14}
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
                      value={formData14.home_page_layout_type || ""}
                      onChange={handleInputChange14}
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
                  onClick={() =>
                    toggleModal("best_Selling_Products_Slider_02_Section_14")
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
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSave14}
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
