import React, { useState } from "react";
import { useProductContext } from "../../../context/Product_Create_Context";

export default function Create_Products_12() {
  // const [stockVisibility, setStockVisibility] = useState("");
  const { setProductStockVisibility, productStockVisibility } =
    useProductContext();

  // const handleStockVisibilityChange = (e) => {
  //   const selectedValue = e.target.value;
  //   setStockVisibility(selectedValue);
  //   setProductStockVisibility(selectedValue); // Update parent component's state
  // };

  return (
    <>
      {/* CREATE PRODUCTS SECTION 12 [Stock Visibility State] */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Stock Visibility State</h3>
        </div>
        <div className="px-4 pb-5 sm:px-5">
          <select
            name="stockVisibility"
            id="stockVisibility"
            value={productStockVisibility}
            onChange={(e) => setProductStockVisibility(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="">Select Option</option>
            <option value="show stock quantity">Show Stock Quantity</option>
            <option value="show stock with text only">
              Show Stock with Text Only
            </option>
            <option value="hide stock">Hide Stock</option>
          </select>
        </div>
      </div>
    </>
  );
}
