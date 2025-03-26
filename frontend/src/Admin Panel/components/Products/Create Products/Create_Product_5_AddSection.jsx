import React from "react";
import { useProductVariantContext } from "../../../context/Product_Variant_Context";

export default function Create_Product_5_AddSection() {
  const {
    options,
    removeOption,
    addOptionValue,
    removeOptionValue,
    addOption,
  } = useProductVariantContext();
  return (
    <>
      {/* CREATE PRODUCT 5[2] ADD SECTION */}
      <div className="divide-y divide-gray-200">
        {options.map((option, index) => (
          <div key={index} className="py-4 sm:flex sm:items-start sm:space-x-4">
            <div className="w-full sm:w-36 xl:w-48">
              <div className="flex items-center justify-between">
                <label>{option.name}</label>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeOption(index)}
                    className="p-0 text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="mt-1 form-input">
                <input
                  type="text"
                  placeholder={`Enter ${option.name} value`}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addOptionValue(index, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
            <div className="flex-1 mt-2 sm:mt-0">
              <label className="invisible opacity-0">{option.name}</label>
              <div className="flex items-start mt-1 space-x-4">
                <input
                  type="text"
                  placeholder="Enter value"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addOptionValue(index, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={(e) => {
                    const input = e.target.previousElementSibling;
                    addOptionValue(index, input.value);
                    input.value = "";
                  }}
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
              <div>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  {option.values.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className="flex items-center px-2 py-1.5 space-x-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      <span className="text-sm font-medium">{value}</span>
                      <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => removeOptionValue(index, valueIndex)}
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
        ))}
      </div>

      {options.length < 3 && (
        <button type="button" className="btn btn-light" onClick={addOption}>
          <svg
            className="w-5 h-5 mr-2 -ml-1 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Add Option
        </button>
      )}
    </>
  );
}
