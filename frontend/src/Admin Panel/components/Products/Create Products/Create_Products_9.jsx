import React from "react";

export default function Create_Products_9() {
  return (
    <>
      {/* CREATE PRODUCTS SECTION 9 [Product Status] */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Product Status</h3>
        </div>
        <div className="px-4 pb-5 sm:px-5">
          <div>
            <label for="productStatus" className="sr-only">
              Product Status
            </label>
            <select name="productStatus" id="productStatus">
              <option value="-1">Select Status</option>
              <option value="1">Draft</option>
              <option value="2">Active</option>
            </select>
          </div>
          <p
            className="hidden mt-2 text-sm font-medium text-red-600"
            id="productHiddenLabel"
          >
            This product will be hidden from your store.
          </p>
          <p
            className="hidden mt-2 text-sm font-medium text-green-600"
            id="productActiveLabel"
          >
            This product will be live on your store.
          </p>
        </div>
      </div>
    </>
  );
}
