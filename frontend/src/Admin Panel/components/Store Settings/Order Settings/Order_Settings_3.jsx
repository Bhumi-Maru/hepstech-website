import React, { useState } from "react";

export default function Order_Settings_3() {
  const [selectedTax, setSelectedTax] = useState("none"); // State to track selected tax type

  return (
    <>
      {/* ORDER SETTINGS SECTION 3 [Tax Calculations] */}
      <div className="px-4 py-5 bg-white rounded-lg shadow sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Tax Calculations
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Manage how your store calculates and shows tax on your store.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="space-y-4">
                {/* None Option */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="noTax"
                    name="taxType"
                    value="none"
                    checked={selectedTax === "none"}
                    onChange={() => setSelectedTax("none")}
                    className=""
                  />
                  <label htmlFor="noTax" className="ml-3">
                    None
                  </label>
                </div>

                {/* Flat GST Option */}
                <div className="flex items-start">
                  <input
                    type="radio"
                    id="flatGST"
                    name="taxType"
                    value="flatGST"
                    checked={selectedTax === "flatGST"}
                    onChange={() => setSelectedTax("flatGST")}
                    className=""
                  />
                  <div className="ml-3">
                    <label htmlFor="flatGST" className="">
                      Flat GST
                    </label>

                    {/* Show Input When Flat GST is Selected */}
                    {selectedTax === "flatGST" && (
                      <div className="mt-2">
                        <label htmlFor="flatGSTAmount" className="sr-only">
                          Flat GST Amount
                        </label>
                        <div className="relative w-20 rounded-md">
                          <input
                            type="number"
                            id="flatGSTAmount"
                            className="!pr-7 border border-gray-300 rounded-md px-2 py-1"
                            placeholder=""
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">%</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Wise GST Option */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="productWiseGST"
                    name="taxType"
                    value="productWiseGST"
                    checked={selectedTax === "productWiseGST"}
                    onChange={() => setSelectedTax("productWiseGST")}
                    className=""
                  />
                  <label htmlFor="productWiseGST" className="ml-3">
                    Product Wise GST
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
