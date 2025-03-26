import React, { useState } from "react";
import { useProductContext } from "../../../context/Product_Create_Context";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import Create_Product_5_Color from "./Create_Product_5_Color";
import Create_Product_5_AddSection from "./Create_Product_5_AddSection";
import { useProductVariantContext } from "../../../context/Product_Variant_Context";

export default function Create_Product_5_Variant() {
  const { isOpenProduct } = useProductContext();
  const { isChecked } = useAdminGlobalContext();
  const {
    variants,
    handleVariantChange,
    colors,
    options,
    removeVariant,
    addVariant,
  } = useProductVariantContext();

  // State to track the currently expanded variant
  const [expandedVariant, setExpandedVariant] = useState(null);

  // Function to toggle accordion
  const toggleVariant = (id) => {
    setExpandedVariant(expandedVariant === id ? null : id);
  };

  return (
    <>
      {/* CREATE PRODUCT SECTION 5 [variant product] */}
      <div
        className={isOpenProduct.variant_Product_Section_5 ? "block" : "hidden"}
        id="variantProduct"
      >
        <div className="px-4 pb-5 sm:px-5">
          {/* CREATE PRODUCT 5[1] COLOR CREATE */}
          <Create_Product_5_Color />
          {/* CREATE PRODUCT 5[2] ADD SECTION */}
          <Create_Product_5_AddSection />
        </div>

        <div className="px-4 py-5 border-t border-gray-200 sm:px-5">
          <p className="text-xs font-medium text-gray-600">Variant Details</p>
          <div className="flow-root mt-2">
            <ul
              className="-my-2 divide-y divide-gray-200 accordion"
              id="variantsAccordion"
            >
              {variants.map((variant) => (
                <li key={variant.id} className="accordion-item">
                  <dt className="accordion-header">
                    <button
                      type="button"
                      className="accordion-button"
                      data-toggle="collapse"
                      data-target={`#variant${variant.id}`}
                      onClick={() => toggleVariant(variant.id)}
                    >
                      <span className="font-medium text-gray-900">
                        Variant {variant.id}
                      </span>
                      <span className="transition-transform transform">
                        {expandedVariant === variant.id ? (
                          <svg
                            className="w-4 h-4 rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        )}
                      </span>
                    </button>
                  </dt>
                  {/* Accordion Content */}
                  {expandedVariant === variant.id && (
                    <dd
                      id={`variant${variant.id}`}
                      data-parent="#variantsAccordion"
                    >
                      <div className="accordion-content">
                        <div className="grid items-end grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                          {isChecked.Enable_Color_Option && (
                            <div>
                              <label>Color</label>
                              <div className="relative mt-1">
                                <select
                                  className="custom-select"
                                  value={variant.color}
                                  onChange={(e) =>
                                    handleVariantChange(
                                      variant.id,
                                      "color",
                                      e.target.value
                                    )
                                  }
                                >
                                  {colors.map((color) => (
                                    <option key={color.name} value={color.name}>
                                      {color.name}
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
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}

                          {options.map((option, index) => (
                            <div key={index}>
                              <label>{option.name}</label>
                              <div className="relative mt-1">
                                <select
                                  className="custom-select"
                                  value={variant[`option${index + 1}`]}
                                  onChange={(e) =>
                                    handleVariantChange(
                                      variant.id,
                                      `option${index + 1}`,
                                      e.target.value
                                    )
                                  }
                                >
                                  <option value="">Select</option>
                                  {option.values.map((value) => (
                                    <option key={value} value={value}>
                                      {value}
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
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div>
                            <label>MRP Price</label>
                            <div className="relative mt-1 rounded-md">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">
                                  ₹
                                </span>
                              </div>
                              <input
                                type="number"
                                className="!pl-7"
                                placeholder="0.00"
                                value={variant.mrpPrice}
                                onChange={(e) =>
                                  handleVariantChange(
                                    variant.id,
                                    "mrpPrice",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <label>Selling Price</label>
                            <div className="relative mt-1 rounded-md">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">
                                  ₹
                                </span>
                              </div>
                              <input
                                type="number"
                                className="!pl-7"
                                placeholder="0.00"
                                value={variant.sellingPrice}
                                onChange={(e) =>
                                  handleVariantChange(
                                    variant.id,
                                    "sellingPrice",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <label>SKU</label>
                            <div className="mt-1">
                              <input
                                type="text"
                                placeholder="0"
                                value={variant.sku}
                                onChange={(e) =>
                                  handleVariantChange(
                                    variant.id,
                                    "sku",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <label>Quantity</label>
                            <div className="mt-1">
                              <input
                                type="number"
                                placeholder="0"
                                value={variant.quantity}
                                onChange={(e) =>
                                  handleVariantChange(
                                    variant.id,
                                    "quantity",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div className="col-span-2 sm:col-span-1 xl:col-span-3">
                            <label>Select Image</label>
                            <div className="mt-1 file-input">
                              <input
                                type="file"
                                onChange={(e) =>
                                  handleVariantChange(
                                    variant.id,
                                    "image",
                                    e.target.files[0]
                                  )
                                }
                              />
                              <label className="label" data-js-label>
                                {variant.image
                                  ? variant.image.name
                                  : "No file selected"}
                              </label>
                              <span className="button">Choose</span>
                            </div>
                          </div>

                          <div>
                            <button
                              type="button"
                              className="btn btn-error-light"
                              onClick={() => removeVariant(variant.id)}
                            >
                              <svg
                                className="w-4 h-4 mr-2 -ml-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                ></path>
                              </svg>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </dd>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="mt-3 btn btn-light"
            onClick={addVariant}
          >
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
            Add Variant
          </button>
        </div>
      </div>
    </>
  );
}
