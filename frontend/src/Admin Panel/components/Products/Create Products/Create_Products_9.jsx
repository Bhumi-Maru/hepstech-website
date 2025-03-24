import React from "react";
import { useProductContext } from "../../../context/Product_Create_Context";

export default function Create_Products_9() {
  const { setProductStatus, productStatus } = useProductContext();

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    const statusValue =
      selectedStatus === "1" ? "Draft" : selectedStatus === "2" ? "Active" : "";

    setProductStatus(statusValue);
  };

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Product Status</h3>
      </div>
      <div className="px-4 pb-5 sm:px-5">
        <label htmlFor="productStatus" className="sr-only">
          Product Status
        </label>
        <select
          id="productStatus"
          value={productStatus ? (productStatus === "Draft" ? "1" : "2") : "-1"}
          onChange={handleStatusChange}
          className="border rounded p-2 w-full"
        >
          <option value="-1">Select Status</option>
          <option value="1">Draft</option>
          <option value="2">Active</option>
        </select>

        {productStatus === "Draft" && (
          <p className="mt-2 text-sm font-medium text-red-600">
            This product will be hidden from your store.
          </p>
        )}
        {productStatus === "Active" && (
          <p className="mt-2 text-sm font-medium text-green-600">
            This product will be live on your store.
          </p>
        )}
      </div>
    </div>
  );
}
