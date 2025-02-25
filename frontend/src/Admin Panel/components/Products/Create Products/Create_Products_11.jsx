import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Create_Products_11() {
  const { toggleStates, handleToggle } = useAdminGlobalContext();
  return (
    <>
      {/* CREATE PRODUCTS SECTION 11 [Size Chart] */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Size Chart</h3>
        </div>
        <div className="px-4 pb-5 sm:px-5">
          <div className="flex items-center justify-between mt-1">
            <label for="sizeChartStatus">Add Size Chart</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="sizeChartStatus"
                name="sizeChartStatus"
                role="checkbox"
                value=""
                tabindex="0"
                checked={toggleStates.sizeChartStatus} // Bind the checkbox to the state
                onChange={() => handleToggle("sizeChartStatus")} // Toggle the state
              />
              <label for="sizeChartStatus"></label>
            </div>
          </div>
          {/* Conditionally Render the Size Chart Content */}
          {toggleStates.sizeChartStatus && (
            <>
              <div className="mt-4" id="sizeChartContent">
                <label for="">Select Image</label>
                <div className="mt-1">
                  <div className="file-input">
                    <input type="file" />
                    <label className="label" data-js-label>
                      No file selected
                    </label>
                    <span className="button">Choose</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
