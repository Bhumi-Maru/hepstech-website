import React, { useState } from "react";
import { useSubCategoryContext } from "../../../context/SubCategory_Context";

export default function SubCategoryPagination() {
  const {
    totalPages,
    currentPage,
    handlePageChange,
    indexOfFirstCategory,
    indexOfLastCategory,
    subCategorySearchFilter, // Use the filtered subcategories array
  } = useSubCategoryContext();

  return (
    <div className="flex flex-col items-center mt-8 sm:mt-4 sm:flex-row sm:justify-between">
      <p className="text-gray-700 showing">
        Showing{" "}
        <span id="page-first-item-number">{indexOfFirstCategory + 1}</span> -{" "}
        <span id="page-last-item-number">
          {Math.min(indexOfLastCategory, subCategorySearchFilter.length)}
        </span>{" "}
        of{" "}
        <span id="totalMainCategories">{subCategorySearchFilter.length}</span>{" "}
        sub categories
      </p>

      <ul className="mt-5 pagination sm:mt-0">
        {[...Array(totalPages)].map((_, index) => (
          <li key={index} className={index + 1 === currentPage ? "active" : ""}>
            <a
              className="page"
              href="#"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
