import React, { useState } from "react";

export default function Create_Products_13({ setProductLabel }) {
  const [productLabel, setLocalProductLabel] = useState("");

  const handleProductLabelChange = (e) => {
    const selectedLabel = e.target.value;
    setLocalProductLabel(selectedLabel);
    setProductLabel(selectedLabel); // Update parent component's state
  };

  return (
    <>
      {/* CREATE PRODUCTS SECTION 13 [Display Product Label] */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-3 sm:px-5">
          <h3 className="text-base font-medium">Display Product Label</h3>
        </div>
        <div className="px-4 pb-5 sm:px-5">
          <select
            name="productLabel"
            id="productLabel"
            value={productLabel}
            onChange={handleProductLabelChange}
            className="border rounded p-2 w-full"
          >
            <option value="">None</option>
            <option value="new">New</option>
            <option value="offer">Offer</option>
            <option value="flash_sale">Flash Sale</option>
          </select>
        </div>
      </div>
    </>
  );
}
