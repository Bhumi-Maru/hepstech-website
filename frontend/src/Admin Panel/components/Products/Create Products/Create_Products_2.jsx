import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Create_Products_2({
  setProductTitle,
  setProductMainCategory,
  setProductSubCategory,
  setProductMaxQuantity,
  setProductMinQuantity,
  productTitle,
  productMainCategory,
  productSubCategory,
  productMinQuantity,
  productMaxQuantity,
}) {
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  // Fetch main categories
  const fetchMainCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/main-category"
      );
      setMainCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching main categories:", error);
    }
  };

  // Fetch subcategories
  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/sub-category/getAll"
      );
      setSubCategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchMainCategories();
    fetchSubCategories();
  }, []);

  return (
    <>
      {/* CREATE PRODUCTS SECTION 2 [Product Information] */}

      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Product Information</h3>
        </div>
        <div className="px-4 pb-5 sm:px-5">
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <div className="col-span-2">
              <label for="productTitle">
                Product Title <span className="text-red-600">*</span>
              </label>
              <div className="mt-1 form-input">
                <input
                  type="text"
                  name="productTitle"
                  id="productTitle"
                  value={productTitle}
                  placeholder="Enter product title"
                  className=""
                  onChange={(e) => setProductTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label for="mainCategory">Main Category</label>
              <div className="relative mt-1">
                <select
                  className=""
                  id="mainCategory"
                  name="mainCategory"
                  value={productMainCategory}
                  onChange={(e) => setProductMainCategory(e.target.value)}
                >
                  <option value="">Select Main Category</option>
                  {mainCategories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.main_category_title}
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
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label for="subCategory">Sub Category</label>
              <div className="relative mt-1">
                <select
                  className=""
                  id="subCategory"
                  name="subCategory"
                  value={productSubCategory}
                  onChange={(e) => setProductSubCategory(e.target.value)}
                >
                  <option value="">Select Sub Category</option>
                  {subCategories.map((subCategory) => (
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
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label for="">Minimum Purchase Quantity</label>
              <div className="mt-1 form-input">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="0"
                  className=""
                  value={productMinQuantity}
                  onChange={(e) => setProductMinQuantity(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label for="">Maximum Purchase Quantity</label>
              <div className="mt-1 form-input">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="0"
                  className=""
                  value={productMaxQuantity}
                  onChange={(e) => setProductMaxQuantity(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
