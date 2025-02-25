import React from "react";

export default function Create_Products_2() {
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
                  placeholder="Enter product title"
                  className=""
                />
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label for="mainCategory">Main Category</label>
              <div className="relative mt-1">
                <select className="" id="mainCategory" name="mainCategory">
                  <option value="">Select Main Category</option>
                  <option value="">Main Category 1</option>
                  <option value="">Main Category 2</option>
                  <option value="">Main Category 3</option>
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
                <select className="" id="subCategory" name="subCategory">
                  <option value="">Select Sub Category</option>
                  <option value="">Sub Category 1</option>
                  <option value="">Sub Category 2</option>
                  <option value="">Sub Category 3</option>
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
