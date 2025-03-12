import React, { useState } from "react";
import { useAdminGlobalContext } from "../../../context/Admin_Global_Context";
import { useSubCategoryContext } from "../../../context/SubCategory_Context";

export default function SubCategoryHeader() {
  const { toggleModal } = useAdminGlobalContext();
  const { searchSubCategory, setSearchSubCategory } = useSubCategoryContext();

  return (
    <>
      {/* SUB CATEGORY HEADING [SEARCH , CREATE SUB CATEGORY BTN ] */}
      <div className="sm:flex sm:items-baseline sm:justify-between">
        {/* <!-- PAGE TITLE --> */}
        <h1 className="heading-1">Sub Categories</h1>

        <div className="hidden mt-4 sm:mt-0 sm:block">
          <a
            title="Create Sub Category"
            className="btn btn-primary"
            role="button"
            data-toggle="modal"
            data-target="#createSubCategoryModal"
            onClick={() => toggleModal("addSubCategoryPopupModal")}
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Create Sub Category
          </a>
        </div>
      </div>

      <div className="max-w-sm mt-4">
        <label for="searchSubCategory" className="sr-only">
          Search
        </label>
        <div className="relative rounded-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="searchSubCategory"
            id="searchSubCategory"
            className="!pl-10"
            placeholder="Search category by name..."
            value={searchSubCategory}
            onChange={(e) => setSearchSubCategory(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
