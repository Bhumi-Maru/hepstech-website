import React from "react";
import { useProductVariantContext } from "../../../context/Product_Variant_Context";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Create_Product_5_Color() {
  const { setNewColor, newColor, addColor, colors, removeColor } =
    useProductVariantContext();

  const { isChecked, handleCheckboxChange } = useAdminGlobalContext();

  return (
    <>
      {/* CREATE PRODUCT 5[1] COLOR CREATE */}
      <div className="flex items-center justify-between py-4 -mt-2">
        <label htmlFor="colorOptionStatus">Enable Color Option</label>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="colorOptionStatus"
            name="colorOptionStatus"
            role="checkbox"
            checked={isChecked.Enable_Color_Option}
            onChange={() => handleCheckboxChange("Enable_Color_Option")}
          />
          <label htmlFor="colorOptionStatus"></label>
        </div>
      </div>
      <hr className="mb-4 border-gray-200" />
      <p className="text-xs font-medium text-gray-600">Options</p>

      {isChecked.Enable_Color_Option && (
        <div className="py-4" id="colorOption">
          <div className="sm:flex sm:items-start sm:space-x-4">
            <div className="w-full sm:w-36 xl:w-48">
              <label>Enter Color Name</label>
              <div className="mt-1 form-input">
                <input
                  type="text"
                  value={newColor.name}
                  onChange={(e) =>
                    setNewColor({ ...newColor, name: e.target.value })
                  }
                  placeholder="Color name"
                />
              </div>
            </div>
            <div className="flex-1 mt-2 sm:mt-0">
              <label>&nbsp;</label>
              <div className="flex items-center mt-1 space-x-2">
                <input
                  type="color"
                  value={newColor.hex}
                  onChange={(e) =>
                    setNewColor({ ...newColor, hex: e.target.value })
                  }
                  className="block w-full border border-gray-300 rounded-md h-9"
                />
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={addColor}
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
                  Add
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex items-center px-2 py-1.5 space-x-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    <div
                      className="w-5 h-5 border border-gray-200 rounded-full"
                      style={{ background: color.hex }}
                    ></div>
                    <span className="text-sm font-medium">{color.name}</span>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => removeColor(index)}
                    >
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
