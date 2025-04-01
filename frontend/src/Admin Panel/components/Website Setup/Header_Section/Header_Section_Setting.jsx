import React, { useState } from "react";

export default function Header_Section_Setting({
  headerType,
  onHeaderTypeChange,
}) {
  const [selectedHeaderType, setSelectedHeaderType] = useState(
    headerType || "sticky"
  );

  const handleHeaderTypeChange = (event) => {
    setSelectedHeaderType(event.target.value);
    if (onHeaderTypeChange) onHeaderTypeChange(event.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 sm:px-5">
        <h3 className="text-base font-medium">Header Settings</h3>
      </div>

      <div className="px-4 pb-5 sm:px-5">
        <p className="text-sm text-gray-500">Select Header Type</p>

        <div className="mt-4 space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
          <div className="flex items-center">
            <input
              type="radio"
              name="headerType"
              id="stickyHeader"
              value="sticky"
              checked={selectedHeaderType === "sticky"}
              onChange={handleHeaderTypeChange}
              className="form-radio text-primary"
            />
            <label
              htmlFor="stickyHeader"
              className="block ml-3 text-sm font-medium text-gray-700"
            >
              Sticky
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="headerType"
              id="nonStickyHeader"
              value="Non-sticky"
              checked={selectedHeaderType === "Non-sticky"}
              onChange={handleHeaderTypeChange}
              className="form-radio text-primary"
            />
            <label
              htmlFor="nonStickyHeader"
              className="block ml-3 text-sm font-medium text-gray-700"
            >
              Non-sticky
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="headerType"
              id="smartStickyHeader"
              value="smart-sticky"
              checked={selectedHeaderType === "smart-sticky"}
              onChange={handleHeaderTypeChange}
              className="form-radio text-primary"
            />
            <label
              htmlFor="smartStickyHeader"
              className="block ml-3 text-sm font-medium text-gray-700"
            >
              Smart Sticky
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
