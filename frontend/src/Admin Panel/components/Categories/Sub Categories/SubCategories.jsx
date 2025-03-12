import React from "react";
import BulkSubCategoryDelete from "./BulkSubCategoryDelete";
import SubCategoryPagination from "./SubCategoryPagination";
import SubCategoryHeader from "./SubCategoryHeader";
import SubCategoryTable from "./SubCategoryTable";

export default function SubCategories() {
  return (
    <>
      {/* START SUB CATEGORIES */}
      <div className="container">
        <SubCategoryHeader />

        <div className="mt-4" id="subCategoriesView">
          <SubCategoryTable />

          <SubCategoryPagination />
        </div>

        <BulkSubCategoryDelete />
      </div>
      {/* END SUB CATEGORIES */}
    </>
  );
}
