import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useProductContext } from "../../../context/Product_Create_Context";
import Create_Product_5_Variant from "./Create_Product_5_Variant";

export default function Create_Products_5() {
  const { toggleStates, handleToggle } = useAdminGlobalContext();
  const {
    setPricing,
    setTax,
    tax,
    pricing,
    setIsOpenProduct,
    productType,
    setProductType,
  } = useProductContext();

  // const handlePricingChange = (e) => {
  //   const { name, value } = e.target;
  //   setPricing((prev) => ({
  //     ...prev,
  //     [name]: value !== "" ? parseFloat(value) || 0 : "",
  //   }));
  // };

  const handlePricingChange = (e) => {
    const { name, value } = e.target;

    // Convert SKU to uppercase
    const processedValue = name === "sku" ? value.toUpperCase() : value;

    setPricing((prev) => ({
      ...prev,
      [name]:
        name === "sku"
          ? processedValue
          : value !== ""
          ? parseFloat(value) || 0
          : "",
    }));
  };

  const handleTaxChange = (e) => {
    const { name, value } = e.target;
    setTax((prev) => ({
      ...prev,
      [name]:
        name === "value" ? (value !== "" ? parseFloat(value) || 0 : "") : value,
    }));
  };

  // Handle product type change
  const handleProductTypeChange = (e) => {
    const selectedType = e.target.value === "variant" ? "variant" : "simple";
    setProductType(selectedType);
    setIsOpenProduct({
      variant_Product_Section_5: selectedType === "variant",
    });
  };

  return (
    <>
      {/* CREATE PRODUCTS SECTION 5 [Pricing Details] */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">Pricing Details</h3>

            <div>
              <label for="productType" className="sr-only">
                Product Type
              </label>
              <div>
                <select
                  name="productType"
                  id="productType"
                  className="light"
                  value={productType}
                  onChange={handleProductTypeChange}
                >
                  <option value="simple">Simple Product</option>
                  <option value="variant">Variant Product</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {productType === "simple" && (
          <div className="px-4 pt-2 pb-5 sm:px-5" id="simpleProduct">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-5">
              <div>
                <label for="mrpPrice">MRP Price</label>
                <div className="relative mt-1 rounded-md">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₹</span>
                  </div>
                  <input
                    type="number"
                    name="mrpPrice"
                    id="mrpPrice"
                    value={pricing.mrpPrice}
                    className="!pl-7"
                    placeholder="0.00"
                    onChange={handlePricingChange}
                  />
                </div>
              </div>

              <div>
                <label for="sellingPrice">Selling Price</label>
                <div className="relative mt-1 rounded-md">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₹</span>
                  </div>
                  <input
                    type="number"
                    name="sellingPrice"
                    value={pricing.sellingPrice}
                    id="sellingPrice"
                    className="!pl-7"
                    placeholder="0.00"
                    onChange={handlePricingChange}
                  />
                </div>
              </div>

              <div>
                <label for="">SKU</label>
                <div className="mt-1 form-input">
                  <input
                    type="text"
                    name="sku"
                    value={pricing.sku}
                    id="sku"
                    placeholder="Enter SKU"
                    className=""
                    onChange={handlePricingChange}
                  />
                </div>
              </div>

              <div>
                <label for="">Quantity</label>
                <div className="mt-1 form-input">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="0"
                    className=""
                    value={pricing.quantity}
                    onChange={handlePricingChange}
                  />
                </div>
              </div>

              <div className="col-span-2 lg:col-span-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="chargeTax"
                      className=""
                      checked={toggleStates.pricingDetails}
                      onChange={() => handleToggle("pricingDetails")}
                    />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label
                      for="chargeTax"
                      className="font-medium text-gray-700"
                    >
                      Charge tax on this product
                    </label>
                  </div>
                </div>

                {toggleStates.pricingDetails && (
                  <>
                    <div className="mt-3" id="vatTaxInput">
                      <label for="">VAT & TAX</label>
                      <div className="relative mt-1 rounded-md">
                        <input
                          type="number"
                          name="value"
                          id="taxValue"
                          className="pr-12"
                          placeholder="0.00"
                          value={tax.value}
                          onChange={handleTaxChange}
                        />

                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label for="type" className="sr-only">
                            Type
                          </label>
                          <select
                            id="taxType"
                            name="taxType"
                            onChange={handleTaxChange}
                            value={tax.taxType} // Ensures controlled input
                            className="h-full py-0 pl-2 pr-8 bg-transparent border-transparent shadow-none"
                          >
                            <option value="flat">Flat</option>
                            <option value="percentage">Percentage</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <Create_Product_5_Variant />
      </div>
    </>
  );
}
