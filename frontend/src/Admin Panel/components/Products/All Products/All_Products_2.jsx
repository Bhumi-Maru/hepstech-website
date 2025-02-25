import React from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";

export default function All_Products_2() {
  const { activeTab, handleActiveTabName } = useAdminGlobalContext();
  return (
    <>
      {/* ALL PRODUCTS SECTION 2 [ALL , ACTIVE , DRAFT] */}
      <div className="mt-4 border-b border-gray-200">
        <ul className="flex -mb-px space-x-6 tabs" id="myTab" role="tablist">
          <li className="tab-item" role="presentation">
            <button
              type="button"
              id="home-tab"
              className={`tab-link ${activeTab === "All" ? "active" : ""}`}
              onClick={() => handleActiveTabName("All")}
              data-toggle="tab"
              data-target="#home"
              role="tab"
              aria-controls="home"
              aria-selected={activeTab === "All"}
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
              className={`tab-link ${activeTab === "Active" ? "active" : ""}`}
              onClick={() => handleActiveTabName("Active")}
              aria-controls="profile"
              aria-selected={activeTab === "Active"}
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
              className={`tab-link ${activeTab === "Draft" ? "active" : ""}`}
              onClick={() => handleActiveTabName("Draft")}
              aria-controls="contact"
              aria-selected={activeTab === "Draft"}
            >
              Draft
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
