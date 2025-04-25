import React from "react";
import { useProductVariantContext } from "../../../context/Product_Variant_Context";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function Create_Product_5_Color() {
  const {
    setNewColor,
    newColor,
    addColor,
    colors,
    removeColor,
    editColor,
    cancelEditColor,
    isEditingColor,
  } = useProductVariantContext();

  const { isChecked, handleCheckboxChange } = useAdminGlobalContext();

  const handleColorNameChange = (e) => {
    setNewColor((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleColorHexChange = (e) => {
    setNewColor((prev) => ({ ...prev, hex: e.target.value }));
  };

  console.log("admin panel color", colors);

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
                  // value={newColor.name}
                  // onChange={handleColorNameChange}
                  placeholder="Color"
                  readOnly
                />
              </div>
            </div>

            <div className="flex-1 mt-2 sm:mt-0">
              <label>&nbsp;</label>
              <div className="flex items-center mt-1 space-x-2">
                <div>
                  <input
                    type="text"
                    id="colorpickername"
                    value={newColor.name}
                    onChange={handleColorNameChange}
                    placeholder=""
                    class=""
                  />
                </div>
                <input
                  type="color"
                  value={newColor.hex}
                  onChange={handleColorHexChange}
                  className="block w-full border border-gray-300 rounded-md h-9"
                />
                <button
                  type="button"
                  className={`btn ${
                    isEditingColor ? "btn-warning" : "btn-light"
                  }`}
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
                  {/* {isEditingColor ? "Update" : "Add"} */}
                </button>
                {/* {isEditingColor && (
                  <button
                    type="button"
                    className="btn btn-dark-light"
                    onClick={cancelEditColor}
                  >
                    Cancel
                  </button>
                )} */}
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                {colors.map((color) => (
                  <div
                    key={color._id}
                    className="flex items-center px-2 py-1.5 space-x-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    <div
                      className="w-5 h-5 border border-gray-200 rounded-full"
                      style={{ background: color.hex }}
                    ></div>
                    <span className="text-sm font-medium">{color.name}</span>
                    {/* <button
                      type="button"
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => editColor(color)}
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button> */}
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeColor(color._id)}
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
