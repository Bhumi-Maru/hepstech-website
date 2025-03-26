import React from "react";

export default function All_Products_2({
  onStatusFilterChange,
  activeStatusFilter,
}) {
  const handleStatusFilter = (status) => {
    if (onStatusFilterChange) {
      onStatusFilterChange(status);
    }
  };
  return (
    <>
      {/* ALL PRODUCTS SECTION 2 [ALL , ACTIVE , DRAFT] */}
      <div className="mt-4 border-b border-gray-200">
        <ul className="flex -mb-px space-x-6 tabs" id="myTab" role="tablist">
          <li className="tab-item" role="presentation">
            <button
              type="button"
              id="home-tab"
              className={`tab-link ${
                activeStatusFilter === "All" ? "active" : ""
              }`}
              onClick={() => handleStatusFilter("All")}
              data-toggle="tab"
              data-target="#home"
              role="tab"
              aria-controls="home"
              aria-selected={activeStatusFilter === "All"}
            >
              All
            </button>
          </li>

          <li className="tab-item" role="presentation">
            <button
              type="button"
              id="profile-tab"
              data-toggle="tab"
              data-target="#profile"
              role="tab"
              className={`tab-link ${
                activeStatusFilter === "Active" ? "active" : ""
              }`}
              onClick={() => handleStatusFilter("Active")}
              aria-controls="profile"
              aria-selected={activeStatusFilter === "Active"}
            >
              Active
            </button>
          </li>

          <li className="tab-item" role="presentation">
            <button
              type="button"
              id="contact-tab"
              data-toggle="tab"
              data-target="#contact"
              role="tab"
              className={`tab-link ${
                activeStatusFilter === "Draft" ? "active" : ""
              }`}
              onClick={() => handleStatusFilter("Draft")}
              aria-controls="contact"
              aria-selected={activeStatusFilter === "Draft"}
            >
              Draft
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
