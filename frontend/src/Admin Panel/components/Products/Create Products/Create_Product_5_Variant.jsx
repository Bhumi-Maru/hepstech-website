import React, { useEffect, useState } from "react";
import { useProductContext } from "../../../context/Product_Create_Context";
import Create_Product_5_Color from "./Create_Product_5_Color";
import Create_Product_5_AddSection from "./Create_Product_5_AddSection";
import { useProductVariantContext } from "../../../context/Product_Variant_Context";

export default function Create_Product_5_Variant() {
  const {
    isOpenProduct,
    variantOptions,
    productVariants,
    setProductVariants,
    updateVariantField,
  } = useProductContext();

  const { colors } = useProductVariantContext();

  const [expandedVariant, setExpandedVariant] = useState(null);

  const handleColorChange = (variantId, color) => {
    setProductVariants((prevVariants) =>
      prevVariants.map((variant) =>
        variant.id === variantId
          ? {
              ...variant,
              variantAttributes: variant.variantAttributes.map((attr) => {
                console.log("attr", attr);
                return attr.name === "Color"
                  ? { ...attr, value: color.name, hex: color.hex }
                  : attr;
              }),
            }
          : variant
      )
    );
  };

  // Clean up object URLs
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
      variantAttributes: [
        {
          name: "Color",
          value: colors[0]?.name || "",
          hex: colors[0]?.hex || "",
        }, // Default color
        ...variantOptions.map((option) => ({
          name: option.name,
          value: option.values[0] || "", // Default to the first value
        })),
      ],
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

  // Handle image upload
  const handleImageUpload = (variantId, file) => {
    const imagePreview = file ? URL.createObjectURL(file) : null;
    setProductVariants(
      productVariants.map((variant) =>
        variant.id === variantId
          ? {
              ...variant,
              image: file || variant.image,
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
        </div>

        <div className="flow-root mt-2">
          <ul
            className="-my-2 divide-y divide-gray-200 accordion"
            id="variantsAccordion"
          >
            {productVariants.map((variant, index) => (
              <li className="accordion-item" key={variant.id}>
                <dt className="accordion-header">
                  <button
                    type="button"
                    className="accordion-button"
                    onClick={() => toggleVariant(variant.id)}
                  >
                    <span className="font-medium text-gray-900">
                      Variant {index}
                    </span>
                    <span className="flex items-center ml-6 accordion-control h-7">
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
                    className="accordion-collapse"
                    data-parent="#variantsAccordion"
                    style={{ display: "block" }}
                  >
                    <div className="accordion-content">
                      <div className="grid items-end grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-4">
                        <div>
                          <label htmlFor="">Color</label>
                          <select
                            value={
                              variant.variantAttributes.find(
                                (attr) => attr.name === "Color"
                              )?.value || ""
                            }
                            onChange={(e) =>
                              handleColorChange(
                                variant.id,
                                colors.find(
                                  (color) => color.name === e.target.value
                                )
                              )
                            }
                          >
                            <option value="">Select color</option>
                            {colors.map((color) => (
                              <option key={color._id} value={color.name}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "15px",
                                      height: "15px",
                                      backgroundColor: color.hex,
                                      marginRight: "8px",
                                      display: "inline-block",
                                    }}
                                  ></div>
                                  {color.name}
                                </div>
                              </option>
                            ))}
                          </select>
                        </div>
                        {variant.variantAttributes
                          .filter((attr) => attr.name !== "Color") // ✅ Remove the "Color" attribute from second dropdown
                          .map((attr) => (
                            <div key={attr.name}>
                              <label>{attr.name}</label>
                              <div className="relative mt-1">
                                <div className="select">
                                  <select
                                    value={attr.value}
                                    onChange={(e) =>
                                      handleAttributeChange(
                                        variant.id,
                                        attr.name,
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="" disabled>
                                      Select {attr.name}
                                    </option>
                                    {variantOptions
                                      .find(
                                        (option) => option.name === attr.name
                                      )
                                      ?.values.map((value) => (
                                        <option key={value} value={value}>
                                          {value}
                                        </option>
                                      ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                          ))}

                        <div>
                          <label htmlFor="">MRP Price</label>
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
                          <label htmlFor="">Selling Price</label>
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
                          <label htmlFor="">SKU</label>
                          <div className="mt-1">
                            <input
                              type="text"
                              placeholder="0"
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
                          <label htmlFor="">Quantity</label>
                          <div className="mt-1">
                            <input
                              type="number"
                              placeholder="0"
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
                        <div>
                          <button
                            onClick={() => removeVariant(variant.id)}
                            type="button"
                            className="btn btn-error-light"
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

                        {variant.image && (
                          <div className="w-100">
                            {variant.imagePreview && (
                              <img
                                src={variant.imagePreview}
                                alt="Variant preview"
                                className="mt-1 h-20 object-cover rounded-md border"
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
