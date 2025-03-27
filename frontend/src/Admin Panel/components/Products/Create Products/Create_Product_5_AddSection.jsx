import React from "react";
import { useProductContext } from "../../../context/Product_Create_Context";

export default function Create_Product_5_AddSection() {
  const {
    variantOptions,
    setVariantOptions,
    productVariants,
    setProductVariants,
  } = useProductContext();

  // Function to add a new option (Max 3 options allowed)
  const addOption = () => {
    if (variantOptions.length >= 3) {
      alert("You can only add up to 3 variant options.");
      return;
    }
    setVariantOptions([...variantOptions, { name: "", values: [] }]);
  };

  // Function to remove an option
  const removeOption = (index) => {
    const newOptions = [...variantOptions];
    newOptions.splice(index, 1);
    setVariantOptions(newOptions);

    // Also update variants to remove any references to this option
    const updatedVariants = productVariants.map((variant) => {
      const newAttributes = variant.variantAttributes.filter(
        (attr) => attr.name !== variantOptions[index].name
      );
      return { ...variant, variantAttributes: newAttributes };
    });
    setProductVariants(updatedVariants);
  };

  // Function to update an option name
  const updateOptionName = (index, newName) => {
    const oldName = variantOptions[index].name;
    const updatedOptions = [...variantOptions];
    updatedOptions[index].name = newName;
    setVariantOptions(updatedOptions);

    // Update variant attributes if option name changed
    if (oldName && oldName !== newName) {
      const updatedVariants = productVariants.map((variant) => {
        const newAttributes = variant.variantAttributes.map((attr) => {
          if (attr.name === oldName) {
            return { ...attr, name: newName };
          }
          return attr;
        });
        return { ...variant, variantAttributes: newAttributes };
      });
      setProductVariants(updatedVariants);
    }
  };

  // Function to add a value to an option
  const addOptionValue = (optionIndex, value) => {
    if (value.trim() === "") return;

    setVariantOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      if (!updatedOptions[optionIndex].values.includes(value)) {
        updatedOptions[optionIndex].values = [
          ...updatedOptions[optionIndex].values,
          value,
        ];
      }
      return updatedOptions;
    });
  };

  // Function to remove a value from an option
  const removeOptionValue = (optionIndex, valueIndex) => {
    const optionName = variantOptions[optionIndex].name;
    const valueToRemove = variantOptions[optionIndex].values[valueIndex];

    setVariantOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[optionIndex].values = updatedOptions[
        optionIndex
      ].values.filter((_, i) => i !== valueIndex);
      return updatedOptions;
    });

    // Remove any variants that use this value
    setProductVariants((prevVariants) =>
      prevVariants.filter(
        (variant) =>
          !variant.variantAttributes.some(
            (attr) => attr.name === optionName && attr.value === valueToRemove
          )
      )
    );
  };

  return (
    <>
      <div className="divide-y divide-gray-200">
        {variantOptions.map((option, index) => (
          <div key={index} className="py-4 sm:flex sm:items-start sm:space-x-4">
            <div className="w-full sm:w-36 xl:w-48">
              <div className="flex items-center justify-between">
                <label>{option.name || `Option ${index + 1}`}</label>
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
                  placeholder="Enter option name"
                  value={option.name}
                  onChange={(e) => updateOptionName(index, e.target.value)}
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

      {variantOptions.length < 3 && (
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
            />
          </svg>
          Add Option
        </button>
      )}
    </>
  );
}
