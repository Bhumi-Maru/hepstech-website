import React, { useState } from "react";
import Create_Products_1 from "./Create_Products_1";
import Create_Products_2 from "./Create_Products_2";
import Create_Products_3 from "./Create_Products_3";
import Create_Products_4 from "./Create_Products_4";
import Create_Products_5 from "./Create_Products_5";
import Create_Products_6 from "./Create_Products_6";
import Create_Products_7 from "./Create_Products_7";
import Create_Products_8 from "./Create_Products_8";
import Create_Products_9 from "./Create_Products_9";
// import Create_Products_10 from "./Create_Products_10";
// import Create_Products_11 from "./Create_Products_11";
import Create_Products_12 from "./Create_Products_12";
import Create_Products_13 from "./Create_Products_13";
// import Create_Products_14 from "./Create_Products_14";
// import axios from "axios";
import { useProductContext } from "../../../context/Product_Create_Context";
import { useNavigate } from "react-router-dom";
import { useProductVariantContext } from "../../../context/Product_Variant_Context";

export default function Create_Products() {
  const { handleCreateProduct, productId } = useProductContext();
  const { options, variants } = useProductVariantContext();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Prepare variant data
      const variantOptions = options.map((option) => ({
        name: option.name,
        values: option.values,
      }));

      const productVariants = variants.map((variant) => ({
        variantAttributes: [
          ...(variant.color ? [{ name: "Color", value: variant.color }] : []),
          ...(variant.option1
            ? [{ name: options[0]?.name || "Option 1", value: variant.option1 }]
            : []),
          ...(variant.option2
            ? [{ name: options[1]?.name || "Option 2", value: variant.option2 }]
            : []),
          ...(variant.option3
            ? [{ name: options[2]?.name || "Option 3", value: variant.option3 }]
            : []),
        ],
        mrpPrice: Number(variant.mrpPrice) || 0,
        sellingPrice: Number(variant.sellingPrice) || 0,
        sku: variant.sku || "",
        quantity: Number(variant.quantity) || 0,
        image: variant.image || null,
      }));

      // Call handleCreateProduct with the prepared data
      const success = await handleCreateProduct({
        options: variantOptions,
        variants: productVariants,
      });

      if (success) {
        navigate("/products/all-products");
      }
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to submit product. Please try again.");
    }
  };

  return (
    <>
      {/* Create Products */}
      <div className="container">
        {/* Create Products [Heading] */}
        <Create_Products_1 />
        <div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-12">
          <div className="space-y-5 md:col-span-8">
            {/* CREATE PRODUCTS SECTION 2 [Product Information] */}
            <Create_Products_2 />
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
              {/* CREATE PRODUCTS SECTION 3 [Product Main Image] */}
              <Create_Products_3 />
              {/* CREATE PRODUCTS SECTION 4 [Product Gallery Images] */}
              <Create_Products_4 />
            </div>

            {/* CREATE PRODUCTS SECTION 5 [Pricing Details] */}
            <Create_Products_5 />
            {/* CREATE PRODUCTS SECTION 6 [Descriptions] */}
            <Create_Products_6 />
            {/* CREATE PRODUCTS SECTION 7 [Purchase Selected Location] */}
            {/* <Create_Products_7 /> */}
            {/* CREATE PRODUCTS SECTION 8 [SEO Tags] */}
            <Create_Products_8 />
          </div>

          <div class="space-y-5 md:col-span-4">
            {/* CREATE PRODUCTS SECTION 9 [Product Status] */}
            <Create_Products_9 />
            {/* CREATE PRODUCTS SECTION 10 [Shipping Configuration] */}
            {/* <Create_Products_10 /> */}
            {/* CREATE PRODUCTS SECTION 11 [Size Chart] */}
            {/* <Create_Products_11 /> */}
            {/* CREATE PRODUCTS SECTION 12 [Stock Visibility State] */}
            <Create_Products_12 />
            {/* CREATE PRODUCTS SECTION 13 [Display Product Label] */}
            <Create_Products_13 />
            {/* CREATE PRODUCTS SECTION 14 [Payment Details] */}
            {/* <Create_Products_14 /> */}
          </div>
        </div>

        <hr className="mt-6 mb-5 border-gray-200" />

        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            className="btn btn-dark-light"
            onClick={() => navigate("/products/all-products")}
          >
            Discard
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            {productId ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </>
  );
}
