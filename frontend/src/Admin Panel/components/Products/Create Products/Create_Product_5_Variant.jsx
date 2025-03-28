import React, { useEffect, useState } from "react";
import { useProductContext } from "../../../context/Product_Create_Context";
import Create_Product_5_Color from "./Create_Product_5_Color";
import Create_Product_5_AddSection from "./Create_Product_5_AddSection";

export default function Create_Product_5_Variant() {
  const {
    isOpenProduct,
    variantOptions,
    productVariants,
    setProductVariants,
    updateVariantField,
    generateAllVariants,
  } = useProductContext();

  const [expandedVariant, setExpandedVariant] = useState(null);

  // Add this useEffect in your component to clean up object URLs
  useEffect(() => {
    return () => {
      productVariants.forEach((variant) => {
        if (variant.imagePreview) {
          URL.revokeObjectURL(variant.imagePreview);
        }
      });
    };
  }, [productVariants]);

  // Toggle accordion
  const toggleVariant = (id) => {
    setExpandedVariant(expandedVariant === id ? null : id);
  };

  // Add new variant
  const addVariant = () => {
    const newVariant = {
      id: Date.now(), // unique ID
      variantAttributes: variantOptions.map((option) => ({
        name: option.name,
        value: option.values[0] || "",
      })),
      mrpPrice: "",
      sellingPrice: "",
      sku: "",
      quantity: "",
      image: null,
    };
    setProductVariants([...productVariants, newVariant]);
  };

  // Remove variant
  const removeVariant = (id) => {
    setProductVariants(productVariants.filter((v) => v.id !== id));
  };

  // Handle variant attribute changes
  // Corrected handleAttributeChange function
  const handleAttributeChange = (variantId, optionName, newValue) => {
    setProductVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === variantId
          ? {
              ...variant,
              variantAttributes: variant.variantAttributes.map((attr) =>
                attr.name === optionName ? { ...attr, value: newValue } : attr
              ),
            }
          : variant
      )
    );
  };

  // Update the handleImageUpload function to handle both new and existing images
  const handleImageUpload = (variantId, file) => {
    const imagePreview = file ? URL.createObjectURL(file) : null;

    setProductVariants(
      productVariants.map((variant) =>
        variant.id === variantId
          ? {
              ...variant,
              image: file || variant.image, // Keep existing image if no new file
              imagePreview: imagePreview || variant.imagePreview,
            }
          : variant
      )
    );
  };

  return (
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
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-600">Variant Details</p>
          <button
            type="button"
            className="btn btn-light"
            onClick={generateAllVariants}
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              ></path>
            </svg>
            Generate All Variants
          </button>
        </div>

        <div className="flow-root mt-2">
          <ul
            className="-my-2 divide-y divide-gray-200 accordion"
            id="variantsAccordion"
          >
            {productVariants.map((variant, index) => (
              <li class="accordion-item" key={variant.id}>
                <dt class="accordion-header">
                  <button
                    type="button"
                    class="accordion-button"
                    onClick={() => toggleVariant(variant.id)}
                  >
                    <span class="font-medium text-gray-900">
                      Variant {index}
                    </span>
                    <span class="flex items-center ml-6 accordion-control h-7">
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

                {expandedVariant === variant.id && (
                  <dd
                    id={`variant${variant.id}`}
                    class="accordion-collapse"
                    data-parent="#variantsAccordion"
                    style={{ display: "block" }}
                  >
                    <div class="accordion-content">
                      <div class="grid items-end grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                        {variantOptions.map((option, index) => (
                          <div>
                            <label for="">{option.name}</label>
                            <div class="relative mt-1">
                              <div class="select">
                                <select
                                  name=""
                                  id=""
                                  value={
                                    variant.variantAttributes.find(
                                      (attr) => attr.name === option.name
                                    )?.value || ""
                                  }
                                  onChange={(e) =>
                                    handleAttributeChange(
                                      variant.id,
                                      option.name,
                                      e.target.value
                                    )
                                  }
                                >
                                  {" "}
                                  <option value="" selected>
                                    Select {option.name}
                                  </option>
                                  {option.values.map((value) => (
                                    <option key={value} value={value}>
                                      {value}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                  class="w-5 h-5 text-gray-500"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div>
                          <label for="">MRP Price</label>
                          <div class="relative mt-1 rounded-md">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <span class="text-gray-500 sm:text-sm">₹</span>
                            </div>
                            <input
                              type="number"
                              name=""
                              id=""
                              class="!pl-7"
                              placeholder="0.00"
                              value={variant.mrpPrice}
                              onChange={(e) =>
                                updateVariantField(
                                  variant.id,
                                  "mrpPrice",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label for="">Selling Price</label>
                          <div class="relative mt-1 rounded-md">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <span class="text-gray-500 sm:text-sm">₹</span>
                            </div>
                            <input
                              type="number"
                              name=""
                              id=""
                              class="!pl-7"
                              placeholder="0.00"
                              value={variant.sellingPrice}
                              onChange={(e) =>
                                updateVariantField(
                                  variant.id,
                                  "sellingPrice",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label for="">SKU</label>
                          <div class="mt-1">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="0"
                              class=""
                              value={variant.sku}
                              onChange={(e) =>
                                updateVariantField(
                                  variant.id,
                                  "sku",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label for="">Quantity</label>
                          <div class="mt-1">
                            <input
                              type="number"
                              name=""
                              id=""
                              placeholder="0"
                              class=""
                              value={variant.quantity}
                              onChange={(e) =>
                                updateVariantField(
                                  variant.id,
                                  "quantity",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div class="col-span-2 sm:col-span-1 xl:col-span-3">
                          <label for="">Select Image</label>

                          <div class="mt-1 file-input">
                            <input
                              type="file"
                              name="image"
                              onChange={(e) =>
                                handleImageUpload(variant.id, e.target.files[0])
                              }
                            />
                            <label class="label" data-js-label="">
                              No file selected
                            </label>
                            <span class="button">Choose</span>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={() => removeVariant(variant.id)}
                            type="button"
                            class="btn btn-error-light"
                          >
                            <svg
                              class="w-4 h-4 mr-2 -ml-1"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>
                            Delete
                          </button>
                        </div>

                        {variant.image && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              {variant.image?.name}
                            </p>
                            {variant.imagePreview && (
                              <img
                                src={variant.imagePreview}
                                alt="Variant preview"
                                className="mt-1 h-20 object-cover rounded"
                              />
                            )}
                          </div>
                        )}
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
  );
}
