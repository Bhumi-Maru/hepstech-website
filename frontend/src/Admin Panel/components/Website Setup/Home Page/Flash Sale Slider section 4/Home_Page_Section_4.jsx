import React, { useState } from "react";
import { useAdminGlobalContext } from "../../../../context/Admin_Global_Context";
import { useHeaderContext } from "../../../../context/Header_Menu_Context";

export default function Home_Page_Section_4() {
  const { toggleStates, handleToggle, toggleModal } = useAdminGlobalContext();
  const { mainCategory, subCategory, products } = useHeaderContext();
  const [formData4, setFormData4] = useState({
    layoutNumber: "4",
    home_page_section_title: "",
    home_page_main_category: "",
    home_page_sub_category: "",
    home_page_layout_type: "",
  });

  const handleInputChange4 = (e) => {
    const { name, value } = e.target;
    setFormData4((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave4 = async () => {
    try {
      // Example API request (replace URL with your actual API endpoint)
      const response = await fetch("http://localhost:7000/api/homepage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData4),
      });

      const result = await response.json();
      console.log("Saved successfully:", result);
      // alert("Layout 9 data saved!");

      setFormData4({
        layoutNumber: "4",
        home_page_section_title: "",
        home_page_main_category: "",
        home_page_sub_category: "",
        home_page_layout_type: "",
      });
    } catch (error) {
      console.error("Error saving layout 4 data:", error);
      alert("Failed to save layout 4.");
    }
  };
  return (
    <>
      {/* [HOME PAGE SECTION 4] Flash Sale Slider  */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="flex items-center justify-between space-x-8">
          <label
            for="flashSaleSliderStatus"
            className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
          >
            Flash Sale Slider (Layout 4)
          </label>

          <div className="flex-shrink-0 ml-4 toggle-switch">
            <input
              type="checkbox"
              id="flashSaleSliderStatus"
              role="checkbox"
              tabindex="0"
              checked={toggleStates.flashSaleSlider}
              onChange={() => handleToggle("flashSaleSlider")}
            />
            <label for="flashSaleSliderStatus"></label>
          </div>
        </div>

        {toggleStates.flashSaleSlider && (
          <>
            <div
              className="mt-4"
              id="flashSaleSliderContent"
              style={{ display: "block" }}
            >
              <div className="max-w-xs">
                <div>
                  <label for=""> Set Timer for Flash Sale </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name=""
                      id="setTimer"
                      placeholder="Enter days"
                      className=""
                      autofocus="false"
                      readonly=""
                      checked={toggleStates.flashSaleSlider}
                      onChange={() => handleToggle("flashSaleSlider")}
                    />
                  </div>
                  <div></div>
                </div>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                <div>
                  <label for=""> Section Title </label>
                  <div className="mt-1 form-input">
                    <input
                      type="text"
                      name="home_page_section_title"
                      value={formData4.home_page_section_title}
                      onChange={handleInputChange4}
                      id=""
                      placeholder="Enter section title"
                      className=""
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
                      value={formData4.home_page_main_category || ""}
                      onChange={handleInputChange4}
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
                      value={formData4.home_page_sub_category || ""}
                      onChange={handleInputChange4}
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
                      value={formData4.home_page_layout_type || ""}
                      onChange={handleInputChange4}
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
                  onClick={() => toggleModal("flashSaleSlider")}
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
                    // type="button"
                    className="btn btn-primary"
                    onClick={handleSave4}
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
